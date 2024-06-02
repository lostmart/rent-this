import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "@/assets/globals.css"
import NavBar from "@/components/NavBar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
	title: "Rent stuff right now !",
	description: "This is a page for renting stuff, you know",
	keywords: "rental, find stuff, do stufff and other stuff",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<header>
					<NavBar />
				</header>
				<main>{children}</main>
			</body>
		</html>
	)
}
