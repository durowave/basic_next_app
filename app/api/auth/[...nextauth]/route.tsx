import NextAuth, { Awaitable, NextAuthOptions, RequestInternal, User } from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/prisma/client";
import CredentialsProvider from "next-auth/providers/credentials";
import { NextRequest } from "next/server";
import bcrypt from 'bcrypt';



export const authOptions:NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
    providers: [
      CredentialsProvider({
        name: "Durowave",
        credentials: {
          username: { label: "Email", type: "text", placeholder: "duro@gmail.com" },
          password: { label: "Password", type: "password" }
        },
        async authorize(credentials, req){
          if(!credentials?.username || !credentials.password) return null
          const user = await prisma.user.findUnique({
            where:{
              email:credentials.username
            }
          })
          if(!user) return null
          // Hash the password
          const passwordMatch = await bcrypt.compare(credentials.password, user.hashedPassword!)
          return passwordMatch ? user : null ;

        }
      }),
        GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID!,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET!
        })
      ],
    session:{
      strategy: 'jwt'
    }

}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }