"use client";
import React from "react";

const LinksCreateForm = () => {

    const handleForm = async (event) => {

        event.preventDefault();

        const formData = new FormData(event.target);

        const text = formData.get("text");

        console.log(text)

        const res = await fetch("/api/links/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ text })
        });

    };

    return (
        <>
            <form
                className="flex flex-col"
                onSubmit={handleForm}
            >
                <input
                    className="my-4 p-2 text-black"
                    id="text"
                    placeholder="Enter Text"
                    required
                    name="text"
                    type="text"
                />

                <button
                    className="bg-white py-2 px-3 text-black cursor-pointer"
                    type="submit"
                >
                    Sumbit
                </button>
            </form>
        </>
    )
};

export default LinksCreateForm;