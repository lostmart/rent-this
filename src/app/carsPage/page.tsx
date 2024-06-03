import React from "react"
import cars from "@/properties.json"

type Tcar = {
	_id: string
	owner: string
	name: string
	type: string
	description: string
	location: {
		street: string
		city: string
		state: string
		zipcode: string
	}
	beds: number
}

const carsPage = () => {
	return (
		<section className="px-4 py-6">
			<div className="container-xl lg:container m-auto px-4 py-6">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{cars.length ? cars.map((car: Tcar) => <div>{car.name} </div>): "No cars found ..."}
				</div>
			</div>
		</section>
	)
}

export default carsPage
