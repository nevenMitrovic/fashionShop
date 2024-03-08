import { useSelector } from "react-redux";
import useFetch from "../helpers/useFetch";
import ServerError from "./ServerError";
import MoonLoader from "react-spinners/MoonLoader";
import Filter from "../components/Filter";
import GenderFilter from "../components/GenderFilter";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";

const Sale = () => {
  const { data, isLoading, error } = useFetch('http://localhost:5000/fashionshop/products/getAllProducts');
  const { search, range, checkbox, comboGenderState } = useSelector(state => state.filters);

  const moonLoaderStyle = {
    display: "block",
    margin: "0 150%",
    borderColor: "red",
  };

  if (error) {
    return (
      <div className="manwomansale">
        <ServerError/>
      </div>
    )
  };

  return (
    <div className="manwomansale">
      <div className="field">
        <div className="filters">
          <Filter />
          <GenderFilter />
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
                data.filter(e=>e.sale)
                .filter(e => {
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

export default Sale;