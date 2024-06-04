import React from "react"
import CarCard from "@/components/CarCard"
import cars from "@/properties.json"

import TCar from "@/types/CarsType"

const carsPage = () => {
	return (
		<section className="px-4 py-6">
			<div className="container-xl lg:container m-auto px-4 py-6">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{cars.length
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
