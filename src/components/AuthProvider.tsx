"use client"
import { SessionProvider } from "next-auth/react"

type AuthProviderProps = {
	children: any
}

const AuthProvider = ({ children }: AuthProviderProps) => {
	return <SessionProvider>{children}</SessionProvider>
}

export default AuthProvider
