import React, {useEffect} from "react";
import faker from "faker";


const bigList = [...Array(5000)].map(() => ({
    name: faker.name.findName(),
    email: faker.internet.email(),
    avatar: faker.internet.avatar()
}));

export const VirtualizedListApp = () => {
    useEffect(() => {
        console.log(bigList);
    });
    const renderItem = item => (
        <div style={{display: "flex"}}>
            <img src={item.avatar} alt={item.name} width={50}/>
            <p>
                {item.name} - {item.email}
            </p>
        </div>
    );
    return <List data={bigList} renderItem={renderItem}/>;
}

function List({data = [], renderItem = f => f, renderEmpty = <p>There is nothing</p>}) {
    return !data.length ? (
        renderEmpty
    ) : (
        <ul>
            {data.map((item, i) => (
                <li key={i}>{renderItem(item)}</li>
            ))}
        </ul>
    );
}