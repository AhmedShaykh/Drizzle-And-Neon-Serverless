"use client";
import { deleteThreadAction } from "@/app/_actions/thread";
import { catchError } from "@/lib/utils";
import { Button } from "./ui/button";
import { User } from "@/lib/schema";
import { Card } from "./ui/card";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Trash } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { z } from "zod";

const RepliesComponent = ({
    text,
    image,
    username,
    id,
    index,
    length,
}: {
    text: string;
    image: string;
    id: string;
    username: string;
    length: number;
    index: number;
}) => {
    return (
        <>
            <h1>hello</h1>
        </>
    )
};

export default RepliesComponent;