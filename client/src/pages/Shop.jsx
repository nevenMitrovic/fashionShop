import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import MoonLoader from "react-spinners/MoonLoader";
import useFetch from '../helpers/useFetch';
import Filter from '../components/Filter';
import GenderFilter from '../components/GenderFilter';
import SaleFilter from '../components/SaleFilter';
import ProductCard from '../components/ProductCard';
import ServerError from './ServerError';



const Shop = () => {

  const dispatch = useDispatch();
  const { data, isLoading, error } = useFetch('http://localhost:5000/fashionshop/products/getAllProducts');
  const { search, range, checkbox, comboGenderState, comboSaleNewState } = useSelector(state => state.filters);

  const moonLoaderStyle = {
    display: "block",
    margin: "0 150%",
    borderColor: "red",
  };

  if (error) {
    return (
      <div className="shop">
        <div className="shopNav">
          <ul className='nav'>
            <li><Link to="/men">Men</Link></li>
            <li><Link to="/women">Women</Link></li>
            <li><Link to="/sale">Sale</Link></li>
          </ul>
        </div>
        <ServerError/>
      </div>
    )
  }


  return (
    <div className="shop">
      <div className="shopNav">
        <ul className='nav'>
          <li className='mennav'><Link to="/men">Men</Link></li>
          <li><Link to="/women">Women</Link></li>
          <li className='salenav'><Link to="/sale">Sale</Link></li>
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
              cssOverride={moonLoaderStyle}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          ) : (
            <>
              {
                data.filter(e => {
                  if (search === null) {
                    return e;
                  }
                  else {
                    if ((e.title.toLowerCase().includes(search.toLowerCase().trim())))
                      return e;
                  }
                })
                  .filter(e => {
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
                  .filter(e => {
                    if (checkbox.length === 0) {
                      return e;
                    } else {
                      for (let i = 0; i < checkbox.length; i++) {
                        if (e.category === checkbox[i]) return e;
                      }
                    }
                  })
                  .filter(e => {
                    if (comboGenderState === "0") {
                      return e;
                    } else {
                      if (comboGenderState === e.gender) return e;
                    }
                  })
                  .filter(e => {
                    if (comboSaleNewState === "0") {
                      return e;
                    } else {
                      if (comboSaleNewState === "s") {
                        if (e.sale === true) return e;
                      } else {
                        if (e.new === true) return e;
                      }
                    }
                  })
                  .map((product) => {
                    return (
                    <Link key={product._id} to={`/product/${product._id}`}><ProductCard product={product} key={product._id} /></Link>
                    )
                  })}
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Shop;