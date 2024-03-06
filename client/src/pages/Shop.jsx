import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import MoonLoader from "react-spinners/MoonLoader";
import useFetch from '../helpers/useFetch';
import Filter from '../components/Filter';
import GenderFilter from '../components/GenderFilter';
import SaleFilter from '../components/SaleFilter';
import ProductCard from '../components/ProductCard';


const Shop = () => {

  const dispatch = useDispatch();
  const { isLoading, error } = useFetch('http://localhost:5000/fashionshop/products/getAllProducts');
  const { allProducts, search, range, checkbox } = useSelector(state => state.products);
  const override = {
    display: "block",
    margin: "0 150%",
    borderColor: "red",
  };

  if (error) {
    return (
      <div className="shop">
        <div className="shopNav">
          <ul className='nav'>
            <li><Link to="/man">Man</Link></li>
            <li><Link to="/woman">Woman</Link></li>
            <li><Link to="/sale">Sale</Link></li>
          </ul>
        </div>
        <div className="error">
          <p>{error.error}</p>
        </div>
      </div>
    )
  }


  return (
    <div className="shop">
      <div className="shopNav">
        <ul className='nav'>
          <li><Link to="/man">Man</Link></li>
          <li><Link to="/woman">Woman</Link></li>
          <li><Link to="/sale">Sale</Link></li>
        </ul>
      </div>
      <div className="field">
        <div className="filters">
          <Filter />
          <GenderFilter />
          <SaleFilter />
        </div>
        <div className="products">
          {isLoading ? (
            <MoonLoader
              color="#045747"
              size={50}
              cssOverride={override}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          ) : (
            <>
              {
                allProducts.filter(e => {
                  if (search === null) {
                    return e;
                  }
                  else {
                    if ((e.title.toLowerCase().includes(search.toLowerCase().trim())))
                      return e;
                  }
                })
                .filter(e=>{
                  if (range === null) {
                    return e;
                  } else {
                    if (e.sale) {
                      let newPrice = parseInt(e.price - e.price * e.percentage / 100);
                      if (newPrice <= range) {
                        return e;
                      }
                    } else {
                      if (e.price <= range) {
                        return e;
                      }
                    }
                  }
                })
                .filter(e=>{
                  if(checkbox.length===0){
                    return e;
                  }else{
                    for(let i=0;i<checkbox.length;i++){
                      if(e.category===checkbox[i]) return e;
                    }
                  }
                })
                  .map(product => {
                    return (<ProductCard product={product} key={product._id} />)
                  })}
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Shop;