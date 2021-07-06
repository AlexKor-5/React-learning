import React, {useState} from "react";
import {Fetch} from "../FetchComponentApp/Fetch";
import {displayData} from "../FetchComponentApp/DisplayData";
import {Posts} from "../FetchComponentApp/Posts";

export const MultipleRequests = () => {
    const [val, setVal] = useState("me");

    return (
        <>
            <h1 onClick={() => setVal("you")}>Multiple req...s{val}</h1>
            <Fetch
                uri={`https://jsonplaceholder.typicode.com/users`}
                renderSuccess={displayData}
            />
            <Posts/>
        </>
    );
}

