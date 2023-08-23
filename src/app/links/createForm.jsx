"use client";
import React, { useState } from "react";
import { Alert } from "flowbite-react";

const LinksCreateForm = () => {

    const [results, setResults] = useState("");

    const [message, setMessage] = useState(null);

    const handleForm = async (event) => {

        event.preventDefault();

        const formData = new FormData(event.target);

        const data = Object.fromEntries(formData);

        const JSONData = JSON.stringify(data);

        const endpoint = "/api/links/";

        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSONData
        };

        const response = await fetch(endpoint, options);

        const result = await response.json();

        setResults(result);

        if (didSubmit) {
            didSubmit(result);
        }

        if (result.message) {
            setMessage(result.message);
        }

    };

    return (
        <>
            {message && <Alert color="warning">{message}</Alert>}

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