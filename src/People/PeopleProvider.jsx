import React, {createContext, useState, useContext} from "react";
import PeopleData from "./people-data.json";

const PeopleContext = createContext();

export const PeopleProvider = ({children}) => {
    const [people, setPerson] = useState(PeopleData);

    const removePerson = id => setPerson(people.filter(person => person.id !== id));

    const addPerson = (object, resetInput = f => f) => {
        setPerson([
            ...people,
            {
                name: object.name,
                surname: object.surname,
                id: object.id
            }
        ]);
        resetInput();
    };

    return (
        <PeopleContext.Provider value={{people, removePerson, addPerson}}>
            {children}
        </PeopleContext.Provider>
    );
}

export const usePeople = () => useContext(PeopleContext);