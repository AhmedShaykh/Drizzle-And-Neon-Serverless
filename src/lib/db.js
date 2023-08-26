import { LinksTable } from "./schema";
import { neon, neonConfig } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

const sql = neon(process.env.DATABASE_URL);

neonConfig.fetchConnectionCache = true;

const db = drizzle(sql);

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

export async function addLink(url) {

    const newLink = { url: url };

    return await db.insert(LinksTable).values(newLink).returning();

};