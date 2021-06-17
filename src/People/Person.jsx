import React from "react";
import {AiFillDelete} from "react-icons/ai";
import {usePeople} from "./PeopleProvider";

export const Person = ({name, surname, id}) => {
    const {removePerson} = usePeople();
    return (
        <div style={{border: "1px solid blue", padding: "10px"}}>
            <h2>{name} {surname}</h2>
            <button onClick={() => removePerson(id)}>
                <AiFillDelete/>
            </button>
        </div>
    );
}