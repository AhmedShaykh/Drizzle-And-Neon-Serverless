import type { Config } from "drizzle-kit";

export default {
    schema: "./src/lib/schema.ts",
    driver: "pg",
    out: "./src/migration",
    dbCredentials: {
        connectionString: "postgres://ahmed.shaykhwork:<password>@ep-restless-frog-79495068-pooler.us-east-2.aws.neon.tech/neondb?sslmode=require"
    },
} satisfies Config;