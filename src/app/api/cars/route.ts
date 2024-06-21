import conectDB from "@/utils/db_connection"
import Car from "@/models/Property"
import CarClass from "@/classes/Car"

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

		// access all values from amenities and images
		const amenities = formData.getAll("amenities")
		const images = formData
			.getAll("images")
			.filter((image: File) => image.name != "")
		// Store formData from
		const formattedData = {
			owner: "bobi",
			name: formData.get("name"),
			type: formData.get("type"),
			description: formData.get("description"),
			location: {
				street: formData.get("location.street"),
				city: formData.get("location.city"),
				state: formData.get("location.state"),
				zipcode: formData.get("location.zipcode"),
			},
			beds: formData.get("beds"),
			baths: formData.get("baths"),
			square_feet: formData.get("square_feet"),
			amenities,
			rates: {
				weekly: formData.get("rates.weekly"),
				monthly: formData.get("rates.monthly"),
				nightly: formData.get("rates.nightly"),
			},
			seller_info: {
				name: formData.get("seller_info.name"),
				email: formData.get("seller_info.email"),
				phone: formData.get("seller_info.phone"),
			},
		}
		console.log(formattedData)
		// Create carData object for database
		const newCar = new CarClass(
			"bob",
			"name test",
			"sometype",
			"this is the description",
			{
				street: "pertnot",
				city: "paris",
				state: "MA",
				zipcode: "456123",
			},
			1,
			2,
			32,
			["kiki", "kiwi"],
			{
				name: "bobie",
				email: "bobie@handomseMe.net",
				phone: "54456132 021",
			},
			{
				weekly: 4512,
			},
			[],
			true
		)

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
