import React, {useReducer} from "react";
import {constants} from "./constants";

const increase = () => {
    return {
        type: constants.INCREASE,
        value: 1
    }
}

const decrease = () => {
    return {
        type: constants.DECREASE,
        value: -1
    }
}


const reducer = (state, action) => {
    switch (action.type) {
        case constants.INCREASE:
            return {number: state.number += action.value}
        case constants.DECREASE:
            return {number: state.number += action.value}
        default:
            return state;
    }
}

export const MyReducerApp = () => {
    const [state, dispatch] = useReducer(reducer, {number: 0});

    return (
        <div>
            <button onClick={() => dispatch(increase())}>+</button>
            {`value = ${state.number}`}
            <button onClick={() => dispatch(decrease())}>-</button>
        </div>
    );
}