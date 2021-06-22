import React, {useState, useEffect} from "react";

export const Checkbox = () => {
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        console.log(checked ? "Yes, checked" : "No, not checked");
    });

    return (
        <>
            <input
                type="checkbox"
                value={checked}
                onChange={() => setChecked(checked => !checked)}
            />
            {checked ? "checked" : "not checked"}
        </>
    );
}