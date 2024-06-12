import conectDB from "@/utils/db_connection"
import Car from "@/models/Property"

// GET /api/cars/:id
export const GET = async (request: any, { params }: any) => {
	try {
		await conectDB()

		const carById = await Car.findById(params.id)

		if (!carById) return new Response('Property Not Found', {
			status: 404
		})

		return new Response(JSON.stringify(carById), {
			status: 200,
		})
	} catch (error) {
		console.log(error)

		return new Response("something wrong", {
			status: 500,
		})
	}
}
