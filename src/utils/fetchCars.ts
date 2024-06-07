import CarsType from "@/types/CarsType"

export async function fetchCars(): Promise<CarsType | string> {
	try {
		const res = await fetch(`${process.env.NEXT_API_DOMAIN}/cars`)
		if (!res.ok) {
			throw new Error("Failed to fetch data ...")
		}
		return res.json()
	} catch (error) {
		console.log(error)
		return "A terriblie error coccured bringing the data !"
	}
}
