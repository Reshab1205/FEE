import React, { useEffect, useState } from 'react'

const DataFetching = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then((data) => {
                setData(data)
                setLoading(false)
            })
    })
    return (
        <div>
            {loading ? (
            <p>Loading ....</p>
            ) : (
            <ul>
                {data.map((item) => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
            
            )}
        </div>
        )
                }


export default DataFetching