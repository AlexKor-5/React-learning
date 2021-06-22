import React, {useEffect} from "react";
import {useAnyKeyToRender} from "./useAnyKeyToRender";

export const WordCount = ({ children = "" })=> {
    useAnyKeyToRender();
    const words = children.split(" ");

    useEffect(() => {
        console.log("fresh render");
    }, [words]);

    return (
        <>
            <p>{children}</p>
            <p>
                <strong>{words.length} - words</strong>
            </p>
        </>
    );
}
