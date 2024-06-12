"use client"
import React, { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import TCar from "@/types/CarsType"

import CarHeaderImage from "@/components/CarHeaderImage"

import { fetchSingleCar } from "@/utils/fetchSingleCar"

const page = () => {
	const { id } = useParams()

	const [car, setCar] = useState<TCar | null | string>(null)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		// console.log(typeof id)

		const getCar = async () => {
			if (!id) return
			try {
				const carData = await fetchSingleCar(id)
				console.log(carData)
				setCar(carData)
			} catch (error) {
				console.error("Error fetching car data ...", error)
			} finally {
				setLoading(false)
			}
		}

		if (car === null) {
			getCar()
		}
	}, [id, car])

	if (!car && !loading) {
		return (
			<h1 className="Text-center text-2xl font-bold mt-10">Car Not Found</h1>
		)
	}

	return (
		<>
			{!loading && car &&  typeof car !== "string" && (
				<>
					<CarHeaderImage image={car.images[0]} />
				</>
			)}
		</>
	)
}

export default page
