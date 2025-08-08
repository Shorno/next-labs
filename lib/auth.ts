import {betterAuth} from "better-auth";
import {drizzleAdapter} from "better-auth/adapters/drizzle";
import {db} from "@/db";
import {user, account, verification, session} from "@/db/schema";
import {nextCookies} from "better-auth/next-js";

export const auth = betterAuth({
    database: drizzleAdapter(db, {
        provider: "pg",
        schema: {
            user: user,
            session: session,
            account: account,
            verification: verification
        }
    }),
    emailAndPassword: {
        enabled: true,
    },
    plugins: [nextCookies()]
});

export type Session = typeof auth.$Infer.Session
