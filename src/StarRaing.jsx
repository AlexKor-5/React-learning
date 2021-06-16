import React, {useState} from "react";
import {FaStar} from "react-icons/fa";

const createArray = length => [...Array(length)];

const StarRating = ({totalStars = 5}, style = {}, ...props) => {
    const [selectedStars, setSelectedStars] = useState(0);
    return (
        <div style={{padding: "5px", ...style}} {...props}>
            {createArray(totalStars).map((n, i) => (
                <Star key={i}
                      selected={selectedStars > i}
                      onSelect={() => setSelectedStars(i + 1)}
                />
            ))}
            <p>
                {selectedStars} of {totalStars} stars
            </p>
        </div>
    );
}
export default StarRating;


const Star = ({selected = false, onSelect = f => f}) => (
    <FaStar color={selected ? "red" : "grey"} onClick={onSelect}/>
);