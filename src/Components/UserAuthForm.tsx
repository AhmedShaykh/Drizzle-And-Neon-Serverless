"use client";
import React, { FC, useState } from "react";
import { useToast } from "./ui/use-toast";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { signIn } from "next-auth/react";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> { };

const UserAuthForm: FC<UserAuthFormProps> = () => {

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const { toast } = useToast();

    return (
        <div>

        </div>
    )
};

export default UserAuthForm;