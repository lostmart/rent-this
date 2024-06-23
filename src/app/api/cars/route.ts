import conectDB from "@/utils/db_connection"
import Car from "@/models/Property"
import CarClass from "@/classes/Car"
import { getSessionUser } from "@/utils/getSessionUser"
import cloudinary from "@/utils/cloudinary"

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
		await conectDB()

		const sessionUser = await getSessionUser()

		if (!sessionUser || !sessionUser.userId) {
			return new Response(
				JSON.stringify({
					msg: "Unauthozized",
				}),
				{
					status: 401,
				}
			)
		}

		const { userId } = sessionUser

		const formData = await request.formData()

		// access all values from amenities and images
		const amenities = formData.getAll("amenities")
		const images = formData
			.getAll("images")
			.filter((image: File) => image.name != "")
		// Store formData from
		const formattedData = {
			owner: userId,
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
			images: [""],
			is_featured: false,
		}
		// Upload images (s) to Cloudinary
		const imageUploadPromises: string[] = []
		for (const image of images) {
			const imageBuffer = await image.arrayBuffer()
			const imageArray = Array.from(new Uint8Array(imageBuffer))
			const imageData = Buffer.from(imageArray)

			// Convert the image data to base64
			const imageBase64 = imageData.toString("base64")

			// Make request to upload to cloudinary
			const result = await cloudinary.uploader.upload(
				`data:image/png;base64,${imageBase64}`,
				{
					folder: "car-rental",
				}
			)
			imageUploadPromises.push(result.secure_url)
			// wait for all images to upload
			//console.log(imageUploadPromises)
			const uploadedImages = await Promise.all(imageUploadPromises)
			// 	// Add uploaded images to the propertyData obect
			formattedData.images = uploadedImages
		}

		// Create carData object for database
		const newCar = new CarClass(
			formattedData.owner,
			formattedData.name,
			formattedData.type,
			formattedData.description,
			formattedData.location,
			formattedData.beds,
			formattedData.baths,
			formattedData.square_feet,
			formattedData.amenities,
			formattedData.seller_info,
			formattedData.rates,
			formattedData.images,
			formattedData.is_featured
		)

		// Save to mongoDB
		const savedCar = new Car(newCar)
		await savedCar.save()

		return Response.redirect(
			`${process.env.NEXTAUTH_URL}/carsPage/${savedCar._id}`
		)

		// return new Response(
		// 	JSON.stringify({
		// 		msg: "all good !",
		// 	}),
		// 	{
		// 		status: 200,
		// 	}
		// )
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
