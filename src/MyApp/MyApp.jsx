import React, {useState} from "react";
import colorData from "../ color-data.json";
import MyColorList from "./MyColorList";

const MyApp = () => {
    const [colors, setColors] = useState(colorData);
    return <MyColorList
        colors={colors}
        onDeleteColor={(id) => {
            const newColors = colors.filter(color => color.id !== id);
            setColors(newColors);
        }}
    />;
}
export default MyApp;