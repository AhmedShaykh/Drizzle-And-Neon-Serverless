"use client";
import React, { useState } from "react";
import { addThreadsSchema } from "@/validations/Form";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage
} from "./ui/form";
import { Button } from "./ui/button";
import { useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { Session } from "next-auth";
import { motion } from "framer-motion";
import { v4 as uuidv4 } from "uuid";
import { z } from "zod";

const AddForm = ({
    session
}: {
    session: Session | any | null;
}) => {

    async function onSubmit(data: z.infer<typeof addThreadsSchema>) {
        console.log(data);
    };

    const [dialogueId, setDialogueId] = useState(uuidv4());

    const form = useForm<z.infer<typeof addThreadsSchema>>({
        resolver: zodResolver(addThreadsSchema),
        defaultValues: {
            threads: [{ text: "", dialogueId: dialogueId }]
        }
    });

    const { fields, append, remove } = useFieldArray({
        name: "threads",
        control: form.control
    });

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="mt-6 w-full"
            >
                <div className="flex flex-col">
                    {fields.map((field, index) => {
                        return (
                            <motion.div
                                initial={{ opacity: 0, y: 100 }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        ease: "easeInOut",
                                        duration: 0.1,
                                    },
                                }}
                                exit={{ opacity: 0 }}
                                layout
                                key={field.id}
                                className="relative"
                            >
                                <div className="h-20 w-[2px] absolute left-8 top-6 -z-10 bg-gray-700/40" />

                                <FormField
                                    control={form.control}
                                    name={`threads.${index}.text`}
                                    render={({ field }) => (
                                        <FormItem className="relative">
                                            <div className="flex gap-4">
                                                <div className="w-10 h-10 mx-4">
                                                    <Image
                                                        className="rounded-full"
                                                        width={50}
                                                        height={50}
                                                        alt="profile_pic"
                                                        src={
                                                            // session?.user.image ??
                                                            "https://icon-library.com/images/default-user-icon/default-user-icon-8.jpg"
                                                        }
                                                    />
                                                </div>
                                                <div className="flex flex-col w-full">
                                                    <div>
                                                        @
                                                        {/* {session?.user.username} */}
                                                    </div>
                                                    <FormControl className="w-full">
                                                        {/* <TextArea
                                                            placeholder="Add thread"
                                                            name={field.name}
                                                            onBlur={
                                                                field.onBlur
                                                            }
                                                            onChange={
                                                                field.onChange
                                                            }
                                                            value={field.value}
                                                            className="text-area-thread placeholder:text-red-400 w-full"
                                                        /> */}
                                                    </FormControl>
                                                </div>
                                            </div>
                                        </FormItem>
                                    )}
                                />
                            </motion.div>
                        );
                    })}
                </div>
                <Button
                    className="py-3 px-8 font-medium bg-[#020817] dark:bg-white dark:text-black text-white rounded-md"
                    type={"submit"}
                >
                    Submit
                </Button>
            </form>
            <Button
                className="py-3 px-8 font-medium bg-[#020817] dark:bg-white dark:text-black text-white rounded-md"
                onClick={() => {
                    append({ text: "", dialogueId });
                }}
            >
                Add Thread
            </Button>
        </Form>
    )
};

export default AddForm;