import { z } from "zod";

export const addThreadSchema = z.object({
    text: z.string().min(1, "Write a Tweet Bro").nonempty(),
    dialogueId: z.string()
});

export const addThreadsSchema = z.object({
    threads: z.array(addThreadSchema)
});