"use client";
import { catchError } from "@/lib/utils";
import { Button } from "./ui/button";
import { signOut } from "next-auth/react";
import { twMerge } from "tailwind-merge";

const SignOut = (
    { className }: { className?: string }
) => {
    return (
        <div className="flex justify-center">
            <Button
                className={
                    twMerge("flex gap-2 py-3 px-12 font-medium bg-[#020817] dark:bg-white dark:text-black text-white rounded-md",
                        className)}
                onClick={() => {
                    try {

                        signOut();

                    } catch (err) {

                        catchError(err);

                    }
                }}
            >
                <h1>Sign Out...</h1>
            </Button>
        </div>
    )
};

export default SignOut;