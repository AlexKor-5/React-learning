import React from "react";
import {FaStar} from "react-icons/fa";

const createArray = length => [...Array(length)];

const StarRating = ({ totalStars = 5, selectedStars = 0 }) => {
    return (
        <>
            {createArray(totalStars).map((n, i) => (
                <Star
                    key={i}
                    selected={selectedStars > i}
                />
            ))}
            <p>
                {selectedStars} of {totalStars} stars
            </p>
        </>
    );
}
export default StarRating;


const Star = ({selected = false, onSelect = f => f}) => (
    <FaStar color={selected ? "red" : "grey"} onClick={onSelect}/>
);