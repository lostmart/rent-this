import Image from "next/image"
import Link from "next/link"

import {
	FaBed,
	FaBath,
	FaRulerCombined,
	FaMoneyBill,
	FaMapMarker,
} from "react-icons/fa"

import TCar from "@/types/CarsType"

type CarCardProps = {
	carDetails: TCar
}

const CarCard = ({ carDetails }: CarCardProps) => {
	const getRateDisplay = () => {
		const { rates } = carDetails
		if (rates.monthly) {
			return `${rates.monthly.toLocaleString()}/mo`
		}
		if (rates.weekly) {
			return `${rates.weekly.toLocaleString()}/wk`
		}
		if (rates.nightly) {
			return `${rates.nightly.toLocaleString()}/night`
		} else {
			return "something went wrong with the price !!"
		}
	}

	return (
		<div className="rounded-xl shadow-md relative">
			<Image
				src={`/properties/${carDetails.images[0]}`}
				height={0}
				width={0}
				sizes="100vw"
				alt=""
				className="w-full h-auto rounded-t-xl"
			/>
			<div className="p-4">
				<div className="text-left md:text-center lg:text-left mb-6">
					<div className="text-gray-600">{carDetails.type}</div>
					<h3 className="text-xl font-bold">{carDetails.name}</h3>
				</div>
				<h3 className="absolute top-[10px] right-[10px] bg-white px-4 py-2 rounded-lg text-blue-500 font-bold text-right md:text-center lg:text-right">
					$ {getRateDisplay()}
				</h3>

				<div className="flex justify-center gap-4 text-gray-500 mb-4">
					<p>
						<FaBed className="inline mr-1" /> {carDetails.beds}
						<span className="md:hidden lg:inline"> Beds</span>
					</p>
					<p>
						<FaBath className="inline mr-1" /> {carDetails.baths}
						<span className="md:hidden lg:inline"> Baths</span>
					</p>
					<p>
						<FaRulerCombined className="inline mr-1" />
						{carDetails.square_feet}{" "}
						<span className="md:hidden lg:inline">sqft</span>
					</p>
				</div>

				<div className="flex justify-center gap-4 text-green-900 text-sm mb-4">
					<p className={!carDetails.rates.nightly ? "hidden" : ""}>
						<FaMoneyBill className="inline mr-1" /> Nightly
					</p>
					<p className={!carDetails.rates.weekly ? "hidden" : ""}>
						<FaMoneyBill className="inline mr-1" /> Weekly
					</p>
					<p className={!carDetails.rates.monthly ? "hidden" : ""}>
						<FaMoneyBill className="inline mr-1" /> Monthy
					</p>
				</div>

				<div className="border border-gray-100 mb-5"></div>

				<div className="flex flex-col lg:flex-row justify-between mb-4">
					<div className="flex align-middle gap-2 mb-4 lg:mb-0">
						<FaMapMarker className="text-lg text-orange-700 mt-1" />
						<span className="text-orange-700">
							{" "}
							{carDetails.location.city} {carDetails.location.state}{" "}
						</span>
					</div>
					<Link
						href={`/carsPage/${carDetails._id}`}
						className="h-[36px] bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-center text-sm"
					>
						Details
					</Link>
				</div>
			</div>
		</div>
	)
}

export default CarCard
