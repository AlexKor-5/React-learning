import React from "react";
import PropTypes from 'prop-types';

const my_object = {
    name: "Felix",
    code: 1456,
    bool: true
};

export const MySample = () => {
    return (
        <>
            <h1>MySample</h1>
            <MyLittleComp {...my_object}/>
        </>
    );
};

const MyLittleComp = ({name = "", code = 0, bool = false}) =>
    <div>
        <h2>{name}</h2>
        <p>{code}</p>
        <p>{bool ? "true" : "false"}</p>
    </div>

MyLittleComp.propTypes = {
    name: PropTypes.string,
    code: PropTypes.number,
    bool: PropTypes.bool
}