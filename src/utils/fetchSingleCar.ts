import CarsType from "@/types/CarsType"

const apiDomainSingle =
	process.env.NEXT_API_DOMAIN || "http://localhost:3000/api/"

// http://localhost:3000/api/cars/666045c2b31a52b706116b55

export async function fetchSingleCar(id: any): Promise<CarsType | null> {
	// console.log(process.env.NEXT_API_DOMAIN)

	try {
		// handle no domain available
		// if (!apiDomain) {
		// 	return null
		// }
		const res = await fetch(`${apiDomainSingle}/cars/${id}`)
		if (!res.ok) {
			throw new Error("Failed to fetch data ...")
		}
		return res.json()
	} catch (error) {
		console.log(error)
		return null
	}
}
