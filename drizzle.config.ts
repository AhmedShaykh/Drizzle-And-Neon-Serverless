import type { Config } from "drizzle-kit";

export default {
    schema: "./src/lib/schema.ts",
    driver: "pg",
    out: "./src/migration",
    dbCredentials: {
        connectionString: "postgres://ahmed.shaykhwork:PrGuyFT8t5BY@ep-solitary-night-48233370-pooler.us-east-2.aws.neon.tech/neondb?sslmode=require"
    },
} satisfies Config;