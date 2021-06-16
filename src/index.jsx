import React from "react";
import ReactDOM from "react-dom";
//Components
// import TextP from "./afterIndex";
import StarRating from "./StarRaing";
// import MyCounter from "./MyCounter";
// import MyRating from "./MyRating";
// import App from "./App";
// import MyApp from "./MyApp/MyApp";
import Myform from "./MyForm/Myform";
//CSS
import "./index.css";


let destination = document.querySelector("#container");

ReactDOM.render(
    <div>
        <StarRating/>
        {/*<MyRating/>*/}
        {/*<TextP textProp={"Hello World"}/>*/}
        {/*<MyCounter/>*/}
        {/*<App/>*/}
        {/*<MyApp/>*/}
        <Myform/>
    </div>,
    destination
);
