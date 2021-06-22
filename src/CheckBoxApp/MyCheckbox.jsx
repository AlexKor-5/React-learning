import React, {useState, useEffect} from "react";

export const MyCheckbox = () => {
    const [stateCheck, setstateCheck] = useState(false);
    let textValue = stateCheck ? "checked" : "not checked";
    useEffect(()=>{
        console.log(stateCheck);
    });
    return (
        <>
            <h1>MyCheck</h1>
            <input type="checkbox"
                   value={"Check me!"}
                   onChange={() => setstateCheck(!stateCheck)}
            />{textValue}
        </>
    );
}