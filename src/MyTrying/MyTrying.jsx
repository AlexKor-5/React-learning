import React, {useState, useEffect, useMemo} from "react";

const action = (a = "") => {
    console.log(a);
    return a;
}

export const MyTrying = () => {
    const [counter, setCounter] = useState(0);
    const [secCounter, setSecCounter] = useState(0);

    useEffect(() => {
        console.log(`counter = ${counter}`);
    }, [counter]);

    useEffect(() => {
        console.log(`secCounter = ${secCounter}`);
    }, [secCounter]);

    let text = useMemo(() => action("Action NOW!!!"), [counter]);

    return (
        <div>
            <button onClick={() => setCounter(counter + 1)}>{counter}</button>
            <button onClick={() => setSecCounter(secCounter + 10)}>{secCounter}</button>
            <p>{text}</p>
        </div>
    );
}
