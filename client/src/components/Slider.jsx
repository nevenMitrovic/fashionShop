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
        margin: "0 150%",
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
        setCounter(counter + 1);
    };

    const previous = () => {
        setCounter(counter - 1);
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
                        <SliderComponent key={array[counter]._id} {...array[counter]} />
                        <div className="next" onClick={() => next()}><i className="fa-solid fa-right-long"></i></div>
                        <div className="previous" onClick={() => previous()}><i className="fa-solid fa-left-long"></i></div>
                    </>
                )
            }
        </div>
    )
}

export default Slider;