"use client";
import React, { useEffect } from "react";

const Error = ({ error, reset }) => {

    useEffect(() => {

        console.log("Error is ", error);

    }, [error]);

    const retryRequestHandler = () => {

        reset();

    };

    return (
        <div className="flex flex-col items-center gap-8 my-8">
            <h2>Something Went Wrong</h2>

            <button
                className="p-2 bg-white text-zinc-800 cursor-pointer"
                onClick={retryRequestHandler}
            >
                Retry Request
            </button>
        </div>
    )
};

export default Error;