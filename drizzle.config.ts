import type { Config } from "drizzle-kit";

export default {
    schema: "./src/lib/schema.ts",
    driver: "pg",
    out: "./src/migration",
    dbCredentials: {
        connectionString: process.env.DATABASE_URL!
    },
} satisfies Config;