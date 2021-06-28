import {Fetch} from "./Fetch";

export const FetchComponentApp = () => {
    return (
        <Fetch
            uri={`https://jsonplaceholder.typicode.com/users`}
            renderSuccess={UserDetails}
        />
    );
}

const UserDetails = ({data}) => {
    return (
        <>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </>
    );
}