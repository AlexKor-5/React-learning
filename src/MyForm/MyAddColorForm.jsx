import React from "react";
import {useInput} from "./useInput";

const MyAddColorForm = () => {
    const [title, resetTitle] = useInput("");
    const [color, resetColor] = useInput("#000000");

    const submit = (e) => {
        e.preventDefault();
        console.log("result = ");
        console.log(title);
        console.log(color);
        resetTitle();
        resetColor();
    }

    return (
        <form onSubmit={submit}>
            <input {...title}
                   type="text" placeholder="color title..." required/>
            <input {...color}
                   type="color" required/>
            <button>ADD</button>
        </form>
    );
}
export default MyAddColorForm;