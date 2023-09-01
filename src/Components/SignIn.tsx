"use client";
import React, { FC, HTMLAttributes, useState } from "react";
import { catchError, cn } from "@/lib/utils";
import { signIn } from "next-auth/react";
import { Button } from "./ui/button";
import { FcGoogle } from "react-icons/fc";
import { toast } from "sonner";

interface SignInWithGoogleProps
    extends HTMLAttributes<HTMLDivElement> { };

const SignIn: FC<SignInWithGoogleProps> = (
    { className, ...props }
) => {

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const loginWithGoogle = async () => {

        setIsLoading(true);

        try {

            await signIn("google");

        } catch (error) {

            catchError(error);

        } finally {

            setIsLoading(false);

        }
    };

    return (
        <div className={cn("flex justify-center", className)} {...props}>
            <Button
                className="flex gap-2 py-3 px-8 font-medium bg-[#020817] dark:bg-white dark:text-black text-white rounded-md"
                onClick={loginWithGoogle}
                disabled={isLoading}
                type="button"
            >
                <FcGoogle className="text-lg" />
                <p className="md:block hidden">
                    Sign In With Google
                </p>
            </Button>
        </div>
    )
};

export default SignIn;