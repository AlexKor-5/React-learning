import React from "react";

export const displayData = ({data}) => {
    return (
        <>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </>
    );
}