import {DefaultSession} from "@auth/core/types";
import {ISessionUser} from "@/auth.config";

declare module 'next-auth' {
  interface Session {
    user: ISessionUser & DefaultSession["user"]
  }
}