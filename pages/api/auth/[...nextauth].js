import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import GitHubProvider from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';
import connectDatabase from './../../../database/connect';
import Users from './../../../models/Schema';
import { compare } from 'bcryptjs';

export default NextAuth({
	providers: [
		//  Google provider
		GoogleProvider({
			clientId: process.env.GOOGLE_ID,
			clientSecret: process.env.GOOGLE_SECRET,
		}),

		// Github provider
		GitHubProvider({
			clientId: process.env.GITHUB_ID,
			clientSecret: process.env.GITHUB_SECRET,
		}),
		CredentialsProvider({
			name: 'Credentials',
			async authorize(credentials, req) {
				connectDatabase();
				// check user
				const result = await Users.findOne({ email: credentials.email });
				if (!result) {
					throw new Error('No user found with email ' + credentials.email);
				}

				// Check password
				const checkPassword = await compare(
					credentials.password,
					result.password
				);
				// check incorrect password
				if (!checkPassword || result.email != credentials.email) {
					throw new Error('Invalid password and email');
				}
				return result;
			},
		}),
	],
	// $ openssl rand -base64 32

	secret: '+F+A0fG4eZiiccG+B+D6sxMVZVLaS1VBFjgvz0wya+Q=',
});
