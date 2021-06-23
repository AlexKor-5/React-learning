import React, {useState, memo} from "react";

export const CatsApp = () => {
    const [cats, setCats] = useState(["Biscuit", "Jungle", "Outlaw"]);
    return (
        <>
            {cats.map((name, i) => (
                <PureCat key={i} name={name} />
            ))}
            <button onClick={() => setCats([...cats, prompt("Name a cat")])}>
                Add a Cat
            </button>
        </>
    );
}

const Cat = ({name}) => {
    console.log(`rendering ${name}`);
    return <p>{name}</p>;
};

const PureCat = memo(Cat);