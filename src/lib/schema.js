import {
    uniqueIndex,
    timestamp,
    text,
    pgTable,
    serial,
    varchar,
    integer
} from "drizzle-orm/pg-core";

export const LinksTable = pgTable("links", {
    id: serial("id").primaryKey().notNull(),
    url: text("url").notNull(),
    createdAt: timestamp("created_at").defaultNow()
});