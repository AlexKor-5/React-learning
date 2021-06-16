import React, {useState, useEffect} from "react";

const MyCounter = () => {
    const [value, setValue] = useState(0);
    useEffect(() => {
        // Оновлюємо заголовок документа, використовуючи API браузера
        document.title = `You clicked ${value} times`;
    });
    return (
        <Button value={value} onUpdate={() => setValue(value + 1)}/>
    );
}
export default MyCounter;

const Button = ({value = 0, onUpdate = f => f}) =>
    <input type="button" value={value} onClick={onUpdate}/>