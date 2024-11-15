import React, { useState, useEffect } from "react";

const WithDataFetch = (WrappedComponent) => {
    return ({ url, ...props }) => {
        const [data, setData] = useState(null);
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState(null);

        useEffect(() => {
            fetchData();
        }, [url]);

        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error("error fetching url");
                }
                const json = await response.json();
                setData(json);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        if (loading) return <div>...loading</div>;
        if (error) return <div>Error : {error}</div>;

        return <WrappedComponent data={data} {...props} />;
    };
};

export default WithDataFetch;
