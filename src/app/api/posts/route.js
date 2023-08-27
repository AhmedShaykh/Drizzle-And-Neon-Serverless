import { setSessionUser } from "@/lib/session";
import { NextResponse } from "next/server";

export async function GET() {

    await setSessionUser(1);

    return NextResponse.json({
        items: [
            { id: 1, title: "Hello Bilal" },
            { id: 2, title: "Hello Ahmed" },
            { id: 3, title: "Hello Suleman" }
        ]
    });
};