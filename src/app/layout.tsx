// layout.js

import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "@/assets/globals.css"
import NavBar from "@/components/NavBar"
import Footer from "@/components/Footer"
import AuthProvider from "@/components/AuthProvider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
	title: "Rent stuff right now !",
	description: "This is a page for renting stuff, you know",
	keywords: "rental, find stuff, do stuff and other stuff",
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<AuthProvider>
			<html lang="en">
				<body className={inter.className}>
					<header>
						<NavBar />
					</header>
					<main className="min-h-80dvh">{children}</main>
					<Footer />
				</body>
			</html>
		</AuthProvider>
	)
}
