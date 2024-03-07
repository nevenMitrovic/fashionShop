import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import useFetch from "../helpers/useFetch";
import MoonLoader from "react-spinners/MoonLoader";
import { addToCart } from "../redux/slice/cartSlice";
import { useState } from "react";
import Back from "./Back";



const Product = () => {
    const { id } = useParams();
    const { data, isLoading, error } = useFetch('http://localhost:5000/fashionshop/products/getAllProducts');
    const { title, sale, category, description, gender, image, price, percentage } = !isLoading ? data.find(prod => prod._id === id) : {};
    const [size, setSize] = useState('0');
    const [message, setMessage] = useState('');
    const dispatch = useDispatch();


    const addItem = () => { //QUANTITY
        if (size !== '0') {
            if (sale) {
                const obj = { id, title, sale, category, description, gender, image, price: Math.ceil(price - price * percentage / 100), percentage, size };
                console.log(obj)
                dispatch(addToCart(obj));
                setMessage('');
            } else {
                const obj = { id, title, sale, category, description, gender, image, price, percentage, size };
                dispatch(addToCart(obj));
                setMessage('');
            }
        } else {
            setMessage('Molimo vas da izaberete veličinu!');
        }
    }

    const setSiz = (e) => {
        setSize(e.target.value);
    }


    const moonLoaderStyle = {
        display: "block",
        margin: "0 auto",
        borderColor: "red",
    };

    const date = new Date();

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
                    <p style={{ display: "block", margin: "0 auto" }}>Oops! Došlo je do greške prilikom komunikacije sa serverom. Molimo pokušajte ponovo kasnije.</p>
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
            ) : (
                <>
                    <Back />
                    <div className="image"><img src={image.split('png')[0] + 'PNG'} alt={title} /></div>
                    <div className="right">
                        <h2>{title}</h2>
                        <div className="price">
                            {sale ? (<>
                                <div className="oldPrice">{price} RSD</div>
                                <div className="newPrice">{Math.ceil(price - price * percentage / 100)} RSD</div>
                                <div className="action">Akcija traje od {date.getDate()}.{date.getMonth()} do {date.getDate()}.{date.getMonth() + 1}.{date.getFullYear()}</div>
                                <div className="desc">{description}</div>
                                <select id="size" onChange={(e) => setSiz(e)}>
                                    <option value="0">Izaberi veličinu</option>
                                    <option value="s">S</option>
                                    <option value="m">M</option>
                                    <option value="l">L</option>
                                    <option value="xl">XL</option>
                                </select>
                                <span className="message">{message}</span>
                                <div className="add"><div className="button" onClick={() => addItem()}>Dodaj u korpu</div></div>
                            </>
                            ) : (
                                <>
                                    <div className="newPrice">{price} RSD</div>
                                    <div className="action">Akcija traje od {date.getDate()}.{date.getMonth()} do {date.getDate()}.{date.getMonth() + 1}.{date.getFullYear()}</div>
                                    <div className="desc">{description}</div>
                                    <select id="size" onChange={(e) => setSiz(e)}>
                                        <option value="0">Izaberi veličinu</option>
                                        <option value="s">S</option>
                                        <option value="m">M</option>
                                        <option value="l">L</option>
                                        <option value="xl">XL</option>
                                    </select>
                                    <span className="message">{message}</span>
                                    <div className="add"><div className="button" onClick={() => addItem()}>Dodaj u korpu</div></div>
                                </>
                            )}
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

export default Product;