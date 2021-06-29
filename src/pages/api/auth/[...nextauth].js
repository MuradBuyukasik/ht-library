import NextAuth from 'next-auth'
import { signOut } from 'next-auth/client'
import Providers from 'next-auth/providers'

export default NextAuth({
	providers: [
		Providers.Discord({
			clientId: process.env.DISCORD_CLIENT_ID,
			clientSecret: process.env.DISCORD_CLIENT_SECRET,
			scope: "identify guilds"
		}),
	],
	session: {
		jwt: true
	},
	callbacks: {
		jwt: async (token, user, account, profile) => {
			if (user) {
				token.accessToken = account.accessToken;
				token.refreshToken = account.refreshToken;
				token.id = profile.id;
				token.discriminator = profile.discriminator;
			}
			return Promise.resolve(token);
		},
		session: async (session, user) => {
			session.user.accessToken = user.accessToken;
			session.user.refreshToken = user.refreshToken;
			session.user.id = user.id;
			session.user.discriminator = user.discriminator;

			return session;
		}
	}
})