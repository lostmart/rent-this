import conectDB from "@/utils/db_connection"
import Car from "@/models/Property"

// GET /api/cars
export const GET = async () => {
	try {
		await conectDB()

		const cars = await Car.find()

		return new Response(JSON.stringify(cars), {
			status: 200,
		})
	} catch (error) {
		console.log(error)

		return new Response("something wrong", {
			status: 500,
		})
	}
}
