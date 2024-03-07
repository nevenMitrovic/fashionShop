import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import useFetch from "../helpers/useFetch";
import MoonLoader from "react-spinners/MoonLoader";

const Product = () => {
    const { id } = useParams();
    const {data,isLoading,error}=useFetch('http://localhost:5000/fashionshop/products/getAllProducts');
    const { title, sale, category, description, gender, image, price, percentage } = !isLoading ? data.find(prod => prod._id === id) : {};

    const moonLoaderStyle = {
        display: "block",
        margin: "0 auto",
        borderColor: "red",
      };

    const date=new Date();

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
        <div className="product">
            {isLoading ? (
            <MoonLoader
              color="#045747"
              size={50}
              cssOverride={moonLoaderStyle}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          ):(
            <>
            <div className="image"><img src={image.split('png')[0]+'PNG'} alt={title} /></div>
            <div className="right">
                <h2>{title}</h2>
                <div className="price">
                    {sale ? (<>
                        <div className="oldPrice">{price}</div>
                        <div className="newPrice">{price - price * percentage / 100}</div>
                        <div className="action">Akcija traje od {date.getDate()}.{date.getMonth()} do {date.getDate()}.{date.getMonth()+1}.{date.getFullYear()}</div>
                    </>
                    ) : (<></>)}
                </div>
            </div>
            </>
            )}
        </div>
    )
}

export default Product;