import GoogleProvider from "next-auth/providers/google"

export const authOptions = {
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
			authorization: {
				params: {
					prompt: "consent",
					access_type: "offline",
					response_type: "code",
				},
			},
		}),
	],
	callbacks: {
		// called when sucessful sign-In
		async signIn({ profile }) {
			// 1. connect to the DB
			// 2. Check if user exists
			// 3. If not, add user to DB
			// 4. Return true to allow signin
        },
        // Modifies the session object
        async session({ session }) {
            // 1.Get user from DB
            // 2. Assign the user id to the session
            // 3. return session
        }
	},
}
