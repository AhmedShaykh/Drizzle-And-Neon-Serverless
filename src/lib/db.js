import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.DATABASE_URL);

export async function helloWorld() {

    const [dbResponse] = await sql`SELECT NOW();`;

    const dbNow = dbResponse && dbResponse.now ? dbResponse.now : "";

    return { dbNow: dbNow };
};

async function configureDatabase() {

    const res = await sql`CREATE TABLE IF NOT EXISTS "links" (
        "id" serial PRIMARY KEY NOT NULL,
	    "url" text NOT NULL,
	    "short" varchar(50),
	    "created_at" timestamp DEFAULT now()
    );`

};

configureDatabase().catch(err => console.log("Error " + err));