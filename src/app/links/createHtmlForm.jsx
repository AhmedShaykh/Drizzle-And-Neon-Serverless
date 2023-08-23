import React from "react";

const CreateHtmlForm = () => {
    return (
        <form
            className="flex flex-col"
            action="/api/links"
            method="POST"
        >

            <input
                className="my-4 p-2 text-black"
                type="text"
                defaultValue="https://github.com/AhmedShaykh"
                name="url"
                placeholder="Enter Text"
                required
            />

            <button
                className="bg-white py-2 px-3 text-black cursor-pointer"
                type="submit"
            >
                Sumbit
            </button>
        </form>
    )
};

export default CreateHtmlForm;