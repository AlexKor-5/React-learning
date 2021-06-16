import React from "react";
import {FaTrashAlt} from "react-icons/fa";

const MyColor = (
    {
        id,
        title,
        color,
        onRemoveColor = f => f
    }) => {
    return (
        <div style={{border: "1px solid black", padding: "5px", marginBottom: "10px"}}>
            <button onClick={() => onRemoveColor(id)}>
                <FaTrashAlt/>
            </button>
            <h1>{title}</h1>
            <div style={{height: 50, backgroundColor: color}}/>
        </div>
    );
}
export default MyColor;