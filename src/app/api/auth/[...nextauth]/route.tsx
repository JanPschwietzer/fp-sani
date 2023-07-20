import NextAuth from "next-auth/next";
import prisma from "../../../../lib/prismadb";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import Credentials from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcrypt";

export const authOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
        Credentials({
            name: "Credentials",
            credentials: {
                email: { label: "email", type: "text", placeholder: "Email" },
                password: { label: "password", type: "password", placeholder: "Passwort" },
            },
            async authorize(credentials) {
                if(!credentials?.email || !credentials?.password)
                {
                    throw new Error("Bitte füllen Sie alle Felder aus.");
                }

                const user = await prisma.user.findFirst({
                    where: {
                        email: credentials?.email,
                    },
                });
                if (!user || !user?.password) {
                    throw new Error("Email und/oder Passwort ist falsch.");
                }
                if (!bcrypt.compareSync(credentials?.password, user?.password)) {
                    throw new Error("Email und/oder Passwort ist falsch.");
                }
                return user;
            },
        }),
    ],
    secret: process.env.SECRET!,
    session: {
        strategy: 'jwt',
    },
    debug: process.env.NODE_ENV === "development",
};

export const handler = NextAuth(authOptions as any);
export { handler as GET, handler as POST}