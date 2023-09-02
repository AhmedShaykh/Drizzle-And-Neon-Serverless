"use client";
import { deleteThreadAction } from "@/app/_actions/thread";
import { catchError } from "@/lib/utils";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Trash } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const RepliesComponent = ({
    text,
    image,
    username,
    id
}: {
    text: string;
    image: string;
    id: string;
    username: string;
}) => {
    return (
        <Card className="mx-5 my-3 border-none py-2 px-4 flex justify-between gap-4 hover:bg-slate-50 hover:dark:bg-slate-900 rounded-none transition-colors duration-100">
            <Link href={`/dialogue/${id}`} className="relative">
                <div className="z-50 my-2">
                    <Image
                        className="rounded-full w-8 h-8"
                        width={50}
                        height={50}
                        alt="profile_pic"
                        src={
                            image ??
                            "https://icon-library.com/images/default-user-icon/default-user-icon-8.jpg"
                        }
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <div className="flex gap-4 items-center font-semibold text-sm">
                        @{username}
                    </div>

                    <div className="flex flex-col py-1">
                        {text}
                    </div>
                </div>
            </Link>

            <Button
                onClick={async () => {

                    try {

                        await deleteThreadAction(id);

                    } catch (error) {

                        catchError(error);

                    }
                }}
                className="my-auto hover:text-red-600"
                variant={"ghost"}
            >
                <Trash />
            </Button>
        </Card>
    )
};

export default RepliesComponent;