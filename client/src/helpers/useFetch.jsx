import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";


const useFetch = (url) => {

    const dispatch = useDispatch();

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const server = await fetch(url);
                const response = await server.json();
                setData(response)
                setIsLoading(false);
                setError(false);
            } catch (error) {
                const err = { error };
                setIsLoading(false);
                setError(err);
            }
        };

        fetchData();

    }, []);

    return { data, isLoading, error }

};

export default useFetch;

