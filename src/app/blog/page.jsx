import React from "react";
import getDomain from "@/lib/getDomain";

async function getData() {

    const domain = getDomain();

    const endpoint = `${domain}/api/posts`;

    const res = await fetch(endpoint, { cache: 'no-store' });

    if (!res.ok) {
        throw new Error("Failed To Fetch Data");
    }

    if (res.headers.get("content-type") !== "application/json") {
        return { items: [] };
    }

    return res.json();
};


const Blog = async () => {

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

export default Blog;