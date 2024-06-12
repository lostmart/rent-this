import CarsType from "@/types/CarsType"

const apiDomain = process.env.NEXT_API_DOMAIN || null

export async function fetchCars(): Promise<CarsType | []> {
	console.log(apiDomain)

	try {
		// handle no domain available
		if (!apiDomain) {
			return []
		}
		const res = await fetch(`${apiDomain}/cars`)
		if (!res.ok) {
			throw new Error("Failed to fetch data ...")
		}
		return res.json()
	} catch (error) {
		console.log(error)
		return []
	}
}
