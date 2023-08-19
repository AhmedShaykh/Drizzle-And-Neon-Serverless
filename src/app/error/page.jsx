import React from "react";

async function getData() {

    const endpoint = "http://localhost:3000/api/posts";

    const res = await fetch(endpoint, { cache: "no-store" });

    if (!res.ok) {
        throw new Error("Failed To Fetch Data");
    }

    return res.json();
};

const ErrorHandle = async () => {

    const data = await getData();

    const items = data && data.items ? [...data.items] : [];

    return (
        <div className="flex flex-col items-center gap-8 my-8">
            {items && items.map((item, i) => {
                return (
                    <li
                        key={`post-${i}`}
                    >
                        {item.title}
                    </li>
                )
            })}
        </div>
    )
};

export default ErrorHandle