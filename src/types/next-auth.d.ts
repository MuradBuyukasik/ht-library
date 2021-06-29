import { User } from "@/types/types";
import NextAuth from "next-auth"

declare module "next-auth" {
	/**
	 * Returned by `useSession`, `getSession` and received as a prop on the `Provider` React Context
	 */
	interface Session {
		user: {
            name: string,
            image: string,
            discriminator: string,
            accessToken: string,
            refreshToken: string,
            id: string
        }
	}
}