"use client"
import { SessionProvider } from "next-auth/react"

type AuthProviderProps = {
	children: JSX.Element[] | JSX.Element
}

const AuthProvider = ({ children }: AuthProviderProps) => {
	return <SessionProvider>{children}</SessionProvider>
}

export default AuthProvider
