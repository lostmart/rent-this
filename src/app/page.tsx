import Link from "next/link"

const Home = () => {
	return (
		<div className="flex min-h-screen flex-col items-center justify-between p-24">
			<h2>homa pahe</h2>
			<Link href="addPage">Add page</Link>
		</div>
	)
}

export default Home
