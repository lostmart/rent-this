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

//POST /api/cars
export const POST = async (request: any) => {
	try {
		const formData = await request.formData()
		// access all values from amaneties and images
		const amaneties = formData.getAll("amenities")
		const images = formData
			.getAll("images")
			.filter((image: File) => image.name != "")

		console.log(amaneties)
		return new Response(
			JSON.stringify({
				msg: "all good !",
			}),
			{
				status: 200,
			}
		)
	} catch (error) {
		return new Response(
			JSON.stringify({
				msg: "failed to add car ...",
			}),
			{
				status: 500,
			}
		)
	}
}
