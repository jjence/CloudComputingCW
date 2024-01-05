import GoogleProvider from "next-auth/providers/google"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import prisma from "../prisma/client"
const adapter = PrismaAdapter(prisma)
export const authOptions = {
    adapter,
    providers: [   
        GoogleProvider({
            clientId: "314821585092-anc6lppnrep06l29i2b7j1sa8b842s6j.apps.googleusercontent.com",
            clientSecret:"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",
        }),
    ]

}