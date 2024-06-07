import { Document, Schema } from "mongoose"

// Define the TypeScript type for User extending Document
interface TUser extends Document {
	_id: Schema.Types.ObjectId
	name: string
	email: string
	password: string
	createdAt?: Date
	updatedAt?: Date
	image?: string // Optional field
	bookMarks?: Schema.Types.ObjectId[] // Array of ObjectId as string
}

export default TUser
