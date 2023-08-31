"use client";
import React, { FC, useState } from "react";
import { useToast } from "./ui/use-toast";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { signIn } from "next-auth/react";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> { };

const UserAuthForm: FC<UserAuthFormProps> = ({ className, ...props }) => {

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const { toast } = useToast();

    const loginWithGoogle = async () => {

        setIsLoading(true);

        try {

            await signIn("google");

        } catch (error) {

            toast({
                title: "This is Title",
                description: "This is Description",
                variant: "destructive"
            });

        } finally {

            setIsLoading(false);

        }
    };


    return (
        <div className={cn("flex justify-center", className)} {...props}>
            <Button
                type="button"
                className="flex gap-2 py-3 px-20 font-medium bg-[#020817] dark:bg-white dark:text-black text-white rounded-md"
                onClick={loginWithGoogle}
                disabled={isLoading}
            >
                <p className="md:block hidden">Google</p>
            </Button>
        </div>
    )
};

export default UserAuthForm;