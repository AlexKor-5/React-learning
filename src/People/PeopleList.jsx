import React from "react";
import {usePeople} from "./PeopleProvider";
import {Person} from "./Person";

export const PeopleList = () => {
    const {people} = usePeople();
    return (
        people.map((person, i) => {
            return <Person key={i} {...person}/>
        })
    );
}