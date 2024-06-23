import TLocation from "@/types/Location"
import TRates from "@/types/RatesType"
import TSellerInfo from "./SellerInfoType"

type TCar = {
	_id?: string
	owner: string
	name: string
	type: string
	description: string
	location: TLocation
	beds: number
	baths: number
	square_feet: number
	amenities: string[]
	rates: TRates
	seller_info: TSellerInfo
	images: File[] | string[]
	is_featured: boolean
	createdAt?: string
	updatedAt?: string
}

export default TCar
