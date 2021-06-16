import React, {useState} from "react";
import {DiApple} from "react-icons/di";

let createArray = number => [...Array(number)];
const MyRating = ({stars_quantity = 5}) => {
    const [value, setValue] = useState(0);
    return (
        createArray(stars_quantity).map((e, i) => (
            <Star key={i}
                  color_changer={value > i}
                  onChange={() => setValue(i + 1)}/>
        ))
    );
}
export default MyRating;

const Star = ({color_changer = false, onChange = f => f}) => {
    return <DiApple size="3em"
                    color={color_changer ? "black" : "grey"}
                    onClick={onChange}/>;
}

