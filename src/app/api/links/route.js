import isValidURL from "@/lib/isValidURL";
import { addLink } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {

    const contentType = await request.headers.get("content-type");

    if (contentType !== "application/json") {

        return NextResponse.json({ "error": "Invalid request" }, { status: 415 });

    }

    const data = await request.json();

    const url = data && data.url ? data.url : null;

    const validURL = await isValidURL(url, ["SQL"]);

    if (!validURL) {
        return NextResponse.json({ "Message": `${url} Is Not Valid.` }, { status: 400 });
    }

    const dbResponse = await addLink(url);

    return NextResponse.json(data, dbResponse, { status: 201 });
};