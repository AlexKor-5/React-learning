import React from "react";
import MyColor from "./MyColor";

const MyColorList = ({colors = [], onDeleteColor = f => f}) => {

    return (
        colors.map((color, index) => {
            return <MyColor
                key={index}
                {...color}
                onRemoveColor={onDeleteColor}
            />;
        })
    )
}
export default MyColorList;