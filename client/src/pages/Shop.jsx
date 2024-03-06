import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import MoonLoader from "react-spinners/MoonLoader";
import useFetch from '../helpers/useFetch';
import { getProducts } from '../redux/slice/productSlice';
import Filter from '../components/Filter';
import GenderFilter from '../components/GenderFilter';
import SaleFilter from '../components/SaleFilter';
import ProductCard from '../components/ProductCard';


const Shop = () => {

  const dispatch = useDispatch();
  const { data, isLoading, error } = useFetch('http://localhost:5000/fashionshop/products/getAllProducts');




  if (!isLoading && !error) {
    let obj = { products: data };
    dispatch(getProducts(obj));
  }

  const override = {
    display: "block",
    margin: "0 auto",
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
          <GenderFilter/>
          <SaleFilter/>
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
              {data.map(product=>{
              return  <ProductCard product={product} key={product._id}/>
              })}
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Shop;