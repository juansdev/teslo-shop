import NextAuth, {NextAuthConfig} from "next-auth";
import {z} from "zod";
import bcryptjs from "bcryptjs";
import Credentials from "@auth/core/providers/credentials";
import prisma from "@/lib/prisma";
import {Role} from "@prisma/client";

export const listPathProtected = ["/checkout", "/profile", "/orders"];
export const listPathProtectedForAdmin = ["/admin"];

export const isPathProtected = (currentUrl: string) => listPathProtected.some(pathProtected => currentUrl.startsWith(pathProtected));
export const isPathProtectedForAdmin = (currentUrl: string) => listPathProtectedForAdmin.some(pathProtected => currentUrl.startsWith(pathProtected));

export interface ISessionUser {
  id: string;
  name: string;
  email: string;
  emailVerified?: Date;
  role: Role;
  image?: string;
}

export const authConfig: NextAuthConfig = {
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({email: z.string().email(), password: z.string().min(6)})
          .safeParse(credentials);
        if (!parsedCredentials.success) return null;
        const {email, password} = parsedCredentials.data;
        // Search the Email
        const user = await prisma.user.findUnique({where: {email: email.toLowerCase()}});
        if (!user) return null;
        // Compare credentials
        if (!bcryptjs.compareSync(password, user.password)) return null;
        // Return the user
        const {password: _, ...rest} = user;
        return rest as ISessionUser;
      },
    })
  ],
  pages: {
    signIn: "/auth/login",
    newUser: "/auth/new-account"
  },
  callbacks: {
    authorized({auth, request: {nextUrl}}) {
      const isLoggedIn = !!auth?.user;
      // Redirect unauthenticated users to login page
      if (isPathProtected(nextUrl.pathname))
        return isLoggedIn;
      else if (isPathProtectedForAdmin(nextUrl.pathname) && auth?.user?.role === "admin")
        return true;
      return true;
    },
    jwt({token, user}) {
      if (user) token.data = user;
      return token;
    },
    async session({session, token, user}) {
      session.user = token.data as any;
      return session;
    }
  }
}

export const {signIn, signOut, auth, handlers} = NextAuth(authConfig);