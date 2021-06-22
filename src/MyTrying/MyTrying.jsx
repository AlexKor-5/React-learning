import React, {useState, useEffect, useCallback, useLayoutEffect} from "react";

export const MyTrying = () => {
    const [counter, setCounter] = useState(0);
    const [secCounter, setSecCounter] = useState(0);

    useEffect(() => {
        console.log(`counter = ${counter}`);
    }, [counter]);

    useEffect(() => {
        console.log(`secCounter = ${secCounter}`);
    }, [secCounter]);

    let action = useCallback((a) => {
        console.log(a);
        return a;
    }, []);

    let text = action("Action now!!!", counter);

    useLayoutEffect(()=>{
        console.log('use layout effect');
    });

    return (
        <div>
            <button onClick={() => setCounter(counter + 1)}>{counter}</button>
            <button onClick={() => setSecCounter(secCounter + 10)}>{secCounter}</button>
            <p>{text}</p>
        </div>
    );
}
