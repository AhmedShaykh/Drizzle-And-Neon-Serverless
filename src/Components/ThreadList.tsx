"use client";
import { deleteThreadAction } from "@/app/_actions/thread";
import { Card, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Trash } from "lucide-react";
import Link from "next/link";

const ThreadList = ({
    thread_data,
}: {
    thread_data: any[];
}) => {
    return (
        <div className="flex flex-col w-full">
            <AnimatePresence>
                {thread_data.map((thread) => (
                    <motion.div
                        key={thread.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 1 }}
                        layout
                    >
                        <Card className="rounded-md border border-gray-400 my-5 flex justify-between relative">
                            <Link href={`/dialogue/${thread.id}`}>
                                <CardHeader>
                                    <div className="text-lg">
                                        @{thread.user.username?.toLowerCase()}
                                    </div>
                                    <p className="text-lg">
                                        {thread.text}
                                    </p>
                                </CardHeader>
                            </Link>

                            <div className="h-full flex items-center absolute top-0 bottom-0 right-0">
                                <Button
                                    onClick={() => {
                                        deleteThreadAction(thread.id);
                                    }}
                                    variant={"ghost"}
                                    className="mr-4 hover:text-red-600"
                                >
                                    <Trash />
                                </Button>
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    )
};

export default ThreadList;