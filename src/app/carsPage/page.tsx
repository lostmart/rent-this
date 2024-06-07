import React from "react"
import CarCard from "@/components/CarCard"

import TCar from "@/types/CarsType"

import { fetchCars } from "@/utils/fetchCars"

const carsPage = async () => {
	const cars = await fetchCars()

	// Sort by date
	Array.isArray(cars) &&
		cars.sort(
			(a: TCar, b: TCar) =>
				new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
		)

	return (
		<section className="px-4 py-6">
			<div className="container-xl lg:container m-auto px-4 py-6">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{Array.isArray(cars) && cars.length
						? cars.map((car: TCar) => (
								<CarCard carDetails={car} key={car._id} />
						  ))
						: "No cars found ..."}
				</div>
			</div>
		</section>
	)
}

export default carsPage
