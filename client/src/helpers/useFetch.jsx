import { useEffect, useState } from "react";

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const server = await fetch(url);
                const response = await server.json();
                setData(response);
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

