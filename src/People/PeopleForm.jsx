// import React from "react";
import {useInput} from "./useInput";
import {usePeople} from "./PeopleProvider";
import {v4 as uuidv4} from 'uuid';

export const PeopleForm = () => {
    const [nameVal, resetName] = useInput("");
    const [surnameVal, resetSurname] = useInput("");
    const {addPerson} = usePeople();

    const submit = (event) => {
        event.preventDefault();
        return addPerson({
            name: nameVal.value,
            surname: surnameVal.value,
            id: uuidv4()
        }, () => {
            resetName();
            resetSurname();
        });
    }

    return (
        <form onSubmit={submit}>
            <input {...nameVal} type="text" placeholder={"name"}/>
            <input {...surnameVal} type="text" placeholder={"surname"}/>
            <input type="submit" value={"ADD"}/>
        </form>
    );
}


