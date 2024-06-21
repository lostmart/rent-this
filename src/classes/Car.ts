import TCar from "@/types/CarsType"
import TLocation from "@/types/Location"
import TRates from "@/types/RatesType"
import TSellerInfo from "@/types/SellerInfoType"

class CarClass implements TCar {
	// readonly _id?: string /// check with mondoDB
	public owner: string
	public name: string
	public type: string
	public description: string
	public location: TLocation
	public beds: number
	public baths: number
	public square_feet: number
	public amenities: string[]
	public rates: TRates
	public seller_info: TSellerInfo
	public images: File[]
	public is_featured: boolean
	// readonly createdAt?: string
	// public updatedAt?: string

	constructor(
		owner: string,
		name: string,
		type: string,
		description: string,
		location: TLocation,
		beds: number,
		baths: number,
		square_feet: number,
		amenities: string[],
		seller_info: TSellerInfo,
		rates: TRates,
		images: File[],
		is_featured: boolean
		// createdAt?: string,
		// updatedAt?: string,
		// _id?: string
	) {
		// this._id = _id
		this.owner = owner
		this.name = name
		this.type = type
		this.description = description
		this.location = location
		this.beds = beds
		this.baths = baths
		this.square_feet = square_feet
		this.amenities = amenities
		this.rates = rates
		this.seller_info = seller_info
		this.images = images
		this.is_featured = is_featured
		// this.createdAt = createdAt
		// this.updatedAt = updatedAt
	}

	/*  GETTERS  */

	get showRates(): TRates {
		return this.rates
	}

	get showseller_info(): TSellerInfo {
		return this.seller_info
	}

	get showIs_featured(): boolean {
		return this.is_featured
	}

	/*   SETTERS   */
	set changeRates(newRates: TRates) {
		this.rates = newRates
	}

	set changeSeller_info(newSeller_info: TSellerInfo) {
		this.seller_info = newSeller_info
	}
	set changeIs_featured(newIs_Featured: boolean) {
		this.is_featured = newIs_Featured
	}
}

export default CarClass
