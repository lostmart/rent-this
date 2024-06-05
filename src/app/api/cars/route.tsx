import conectDB from "@/utils/db_connection"

export const GET = async () => {
	try {
		await conectDB()
		const msg = {
			message: "Hello baby",
		}

		return new Response(JSON.stringify(msg), {
			status: 200,
		})
	} catch (error) {
		console.log(error)

		return new Response("something wrong", {
			status: 500,
		})
	}
}
