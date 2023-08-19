"use client";
import React, { useState } from "react";

const Card = ({ title }) => {

    const [count, setCount] = useState(1);

    const handleClick = (event) => {

        event.preventDefault();

        setCount(count + 1);

    };

    if (!title) { return <div>Empty</div> }

    return (
        <div>
            <h1 onClick={handleClick}>
                {title}
            </h1>
            <h2>
                {count}
            </h2>
        </div>
    )
}

export default Card;