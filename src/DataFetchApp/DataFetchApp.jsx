import React, {useEffect, useState} from "react";

export const DataFetchApp = () => {
    const [data, setData] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(setData)
            .then(() => setLoading(false))
            .catch(setError);
    }, []);

    useEffect(() => {
        console.log(data);
    }, [data]);

    useEffect(() => {
        error && console.log(error);
    }, [error]);

    if (loading) return <p>Data Loading ...</p>;
    if (!data) return null;

    if (data) {
        return (
            <>
                {data.map((user, i) => <User key={i} {...user}/>)}
            </>
        );
    }
}

const User = ({name = "", phone=""}) =>
    <div style={{border: "2px solid gold", padding: "20px", margin: "10px"}}>
        <p>{name}</p>
        <p>{phone}</p>
    </div>