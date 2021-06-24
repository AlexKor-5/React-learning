import React from "react";
import ReactDOM from "react-dom";
//CSS
import "./index.css";
// import {MyReducerApp} from "./MyReducerApp/MyReducerApp";
// import {CatsApp} from "./CatsApp/CatsApp";
import {DataFetchApp} from "./DataFetchApp/DataFetchApp";
//Components
// import TextP from "./afterIndex";
// import StarRating from "./StarRaing";
// import MyCounter from "./MyCounter";
// import MyRating from "./MyRating";
// import App from "./App";
// import MyApp from "./MyApp/MyApp";
// import Myform from "./MyForm/Myform";
// import {PeopleApp} from "./People/PeopleApp";
// import {CheckBoxApp} from "./CheckBoxApp/CheckBoxApp";
// import {PhraseApp} from "./PhraseApp/PhraseApp";
// import {UseKeyApp} from "./UseKeyApp/UseKeyApp";
// import {MyTrying} from "./MyTrying/MyTrying";



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
        {/*<PeopleApp/>*/}
        {/*<CheckBoxApp></CheckBoxApp>*/}
        {/*<PhraseApp/>*/}
        {/*<UseKeyApp/>*/}
        {/*<MyTrying/>*/}
        {/*<MyReducerApp/>*/}
        {/*<CatsApp/>*/}
        <DataFetchApp/>
    </div>,
    destination
);
