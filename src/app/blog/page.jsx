import React from "react";
import Card from "./card";
import { helloWorld } from "@/lib/db";
import getDomain from "@/lib/getDomain";

async function getData() {

    const domain = getDomain();

    const endpoint = `${domain}/api/posts`;

    const res = await fetch(endpoint, { cache: "no-store" });

    if (!res.ok) {
        throw new Error("Failed To Fetch Data");
    }

    if (res.headers.get("content-type") !== "application/json") {
        return { items: [] };
    }

    return res.json();
};


async function Blog() {

    const data = await getData();

    const dbHello = await helloWorld();

    console.log(dbHello);

    const items = data && data.items ? [...data.items] : [];

    return (
        <div className="flex flex-col items-center gap-8 my-8">
            {items && items.map((item, i) => {
                return (
                    <Card
                        key={`post-${i}`}
                        title={item.title}
                    />
                )
            })}
        </div>
    )
};

export default Blog;

export const runtime = "edge";

export const prefferedRegion = "iad1";