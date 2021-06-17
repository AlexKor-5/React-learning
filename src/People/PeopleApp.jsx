import React from "react";
import {PeopleList} from "./PeopleList";
import {PeopleForm} from "./PeopleForm";
import {PeopleProvider} from "./PeopleProvider";

export const PeopleApp = () => {
    return (
        <div>
            <PeopleProvider>
                <PeopleList/>
                <PeopleForm/>
            </PeopleProvider>
        </div>
    );
}