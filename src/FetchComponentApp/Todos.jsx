import React from "react";
import {Fetch} from "../FetchComponentApp/Fetch";
import {displayData} from "./DisplayData";

export const Todos = () => {
    return (
        <>
            <h1>Todos</h1>
            <Fetch
                uri={`https://jsonplaceholder.typicode.com/todos`}
                renderSuccess={displayData}
            />
        </>
    );
}

