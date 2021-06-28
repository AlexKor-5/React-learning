import {useEffect} from "react";
import {useFetch} from "./CustomFetchHook";

export const FetchHookApp = () => {
    const {loading, data, error} = useFetch(`https://jsonplaceholder.typicode.com/users`);

    useEffect(() => {
        console.log(data);
    }, [data]);

    if (loading) return <h1>loading...</h1>;
    if (error)
        return <pre>{JSON.stringify(error, null, 2)}</pre>;

    return <h1>FetchHookApp works!</h1>;
}

