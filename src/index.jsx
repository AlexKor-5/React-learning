import React from "react";
import ReactDOM from "react-dom";
//CSS
import "./index.css";

//Components
// import TextP from "./afterIndex";
// import StarRating from "./StarRaing";
// import MyCounter from "./MyCounter";
// import MyRating from "./MyRating";
// import App from "./App";
// import MyApp from "./MyApp/MyApp";
// import Myform from "./MyForm/Myform";
import {PeopleApp} from "./People/PeopleApp";




let destination = document.querySelector("#container");

ReactDOM.render(
    <div>
        {/*<StarRating/>*/}
        {/*<MyRating/>*/}
        {/*<TextP textProp={"Hello World"}/>*/}
        {/*<MyCounter/>*/}
        {/*<App/>*/}
        {/*<MyApp/>*/}
        {/*<Myform/>*/}
        <PeopleApp/>
    </div>,
    destination
);
