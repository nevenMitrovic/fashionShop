import { useEffect, useState } from "react";
import useFetch from '../helpers/useFetch';
import MoonLoader from "react-spinners/MoonLoader";
import SliderComponent from "./SliderComponent";



const Slider = () => {

    const { data, isLoading, error } = useFetch('http://localhost:5000/fashionshop/products/getAllProducts');

    const [counter, setCounter] = useState(0);

    let array;

    const moonLoaderStyle = {
        display: "block",
        margin: "0 50%",
        borderColor: "red",
    };

    if (!isLoading) {

        array = data.filter(e => e.new);
    }


    if (error) {
        return (
            <div className="slider">
                <ServerError />
            </div>
        )
    };

    const next = () => {
        setTimeout(() => {
            if (counter === array.length - 1) {
                setCounter(0)
            } else {
                setCounter(counter + 1);
            }
        }, 500)
    };

    const previous = () => {
        setTimeout(() => {
            if (counter === 0) {
                setCounter(array.length - 1);
            } else {
                setCounter(counter - 1);
            }
        }, 500)
    };


    return (
        <div className="slider">
            {
                isLoading ? (
                    <MoonLoader
                        color="#045747"
                        size={50}
                        cssOverride={moonLoaderStyle}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                    />
                ) : (
                    <>
                    <>
                        <h2>Preporucujemo od novih artikala</h2>
                        <div className="next" onClick={() => next()}><i className="fa-solid fa-right-long"></i></div>
                        <div className="previous" onClick={() => previous()}><i className="fa-solid fa-left-long"></i></div>
                    </>
                        <SliderComponent key={array[counter]._id} {...array[counter]} />
                    </>
                )
            }
        </div>
    )
}

export default Slider;