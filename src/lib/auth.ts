import { NextAuthOptions, getServerSession } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { users } from "./schema";
import { db } from "./db";
import { eq } from "drizzle-orm";
import { nanoid } from "nanoid";
import "dotenv/config";

export const authOptions: NextAuthOptions = {
    adapter: DrizzleAdapter(db),
    secret: process.env.NEXTAUTH_SECRET!,
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!
        })
    ],
    pages: {
        signIn: "/signin",
    },
    session: {
        strategy: "jwt",
    },
    callbacks: {
        async session({ session, token }) {
            return session;
        },
        async jwt({ token }) {
            return token;
        }
    }
};

export const getAuthSession = () => getServerSession(authOptions);