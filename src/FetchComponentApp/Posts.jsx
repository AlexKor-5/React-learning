import React from "react";
import {Fetch} from "../FetchComponentApp/Fetch";
import {displayData} from "./DisplayData";
import {Todos} from "./Todos";

export const Posts = () => {

    return (
        <>
            <h1>Posts</h1>
            <Fetch
                uri={`https://jsonplaceholder.typicode.com/posts`}
                renderSuccess={displayData}
            />
            <Todos/>
        </>
    );
}