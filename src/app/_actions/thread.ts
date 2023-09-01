"use server";
import { addThreadsSchema } from "@/validations/Form";
import { getAuthSession } from "@/lib/auth";
import { Thread, threads } from "@/lib/schema";
import { db } from "@/lib/db";
import { and, eq, inArray, isNull, not } from "drizzle-orm";
import { v4 as uuidv4 } from "uuid";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import { get } from "http";

export async function addThreadsAction(
    input: z.infer<typeof addThreadsSchema>
) {

    const session = await getAuthSession();

    if (!session) return Error("Not logged in");

    const uuids = getUuidsFromLength(input.threads.length);

    type ThreadNew = Omit<Thread, "createdAt">;

    const result_threads: Omit<ThreadNew[], "created_at"> = [];

    input.threads.forEach((thread, i) => {
        result_threads.push({
            id: uuids[i],
            text: thread.text,
            userId: session.user.id,
            parentId: uuids[i - 1] || null,
            dialogue_id: thread.dialogueId,
        });
    });

    await db.insert(threads).values(result_threads);

    revalidatePath("/");
};

function getUuidsFromLength(length: number) {
    return Array.from({ length }, () => uuidv4());
};

// export async function getFeedAction() {

//     const results = await db.query.threads.findMany({
//         where: isNull(threads.parentId),
//         with: {
//             user: {
//                 columns: {
//                     username: true,
//                     image: true,
//                     id: true,
//                 }
//             }
//         }
//     });

//     return results;
// };