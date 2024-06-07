import CarCard from "@/components/CarCard"

import Link from "next/link"

import CarsType from "@/types/CarsType"

import { fetchCars } from "@/utils/fetchCars"

const HomeCompCars = async () => {
	const cars = await fetchCars()

	if (Array.isArray(cars)) {
		const threeRandomCars: CarsType[] | string = cars
			.sort(() => Math.random() - Math.random())
			.slice(0, 3)

		return (
			<>
				<section className="px-4 py-6">
					<div className="container-xl lg:container m-auto">
						<h2 className="text-3xl font-bold text-blue-500 mb-6 text-center">
							Recent Properties
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
							{Array.isArray(cars) && !threeRandomCars.length ? (
								<p>No Data Found ...</p>
							) : (
								Array.isArray(cars) &&
								Array.isArray(threeRandomCars) &&
								threeRandomCars.map((car) => (
									<CarCard key={car._id} carDetails={car} />
								))
							)}
						</div>
					</div>
				</section>
				<section className="m-auto max-w-lg my-10 px-6">
					<Link
						href="/carsPage"
						className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
					>
						View All Cars
					</Link>
				</section>
			</>
		)
	}
}

export default HomeCompCars
