import cars from "@/properties.json"
import CarCard from "@/components/CarCard"

import Link from "next/link"

import CarsType from "@/types/CarsType"

const HomeCompCars = () => {
	const threeRandomCars: CarsType[] = cars
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
						{!threeRandomCars.length ? (
							<p>no found</p>
						) : (
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

export default HomeCompCars
