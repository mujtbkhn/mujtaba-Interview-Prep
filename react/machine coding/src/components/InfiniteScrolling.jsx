import React, { useEffect, useState } from 'react'

const InfiniteScrolling = () => {
    const [page, setPage] = useState(1)
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        getCatData(page)
    }, [page])

    useEffect(() => {
        const handleScroll = () => {
            if (window.innerHeight + document.documentElement.scrollTop + 100 >= document.documentElement.scrollHeight && !loading) {
                setPage(prevPage => prevPage + 1)
            }
        }
        window.addEventListener('scroll', handleScroll);
        return () => { window.removeEventListener('scroll', handleScroll) }
    }, [loading])

    const getCatData = async (page) => {
        setLoading(true);
        try {
            const response = await fetch(`https://catfact.ninja/facts?page=${page}`);
            const json = await response.json();
            setData(prevData => [...prevData, ...json.data]);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false)
        }
    };

    return (
        <div style={{ padding: '10rem' }}>
            {data.map((item, i) => (
                <h1 key={i}>
                    {item.fact}
                </h1>
            ))}
            {loading && <p>Loading more facts...</p>}
        </div>
    )
}

export default InfiniteScrolling