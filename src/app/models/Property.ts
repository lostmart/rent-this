import { Schema, model, models } from "mongoose"
import TCar from "@/types/CarsType"

const CarSchema = new Schema<TCar>(
	{
		owner: {
			type: String,
			ref: "User",
			required: true,
		},
		name: {
			type: String,
			required: true,
		},
		type: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		location: {
			street: {
				type: String,
			},
			city: {
				type: String,
			},
			state: {
				type: String,
			},
			zipcode: {
				type: String,
			},
		},
		baths: {
			type: Number,
			required: true,
		},
		square_feet: {
			type: Number,
			required: true,
		},
		amenities: [
			{
				type: String,
			},
		],
		rates: {
			nightly: {
				type: String,
			},
			weekly: {
				type: String,
			},
			monthly: {
				type: String,
			},
		},
		seller_info: {
			name: {
				type: String,
			},
			email: {
				type: String,
			},
			phone: {
				type: String,
			},
		},
		images: [
			{
				type: String,
			},
		],
		is_featured: {
			type: Boolean,
			default: false,
		},
	},
	{
		timestamps: true,
	}
)

// Ensure the User model is created only once
const Car = models.Car || model<TCar>("Car", CarSchema)

export default Car
