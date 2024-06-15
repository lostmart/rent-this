import { Schema, model, models } from "mongoose"
import TUser from "@/types/UserType"

// Define the Mongoose schema
const UserSchema = new Schema<TUser>(
	{
		email: {
			type: String,
			unique: true, // Changed to boolean
			//required: [true, "Email is required"],
		},
		username: {
			type: String,
			required: [true, "Name is required"],
		},
		password: {
			type: String,
			//required: [true, "Password is required"],
		},
		image: {
			type: String,
		},
		bookMarks: [
			{
				type: Schema.Types.ObjectId,
				ref: "Car",
			},
		],
	},
	{
		timestamps: true,
	}
)

// Ensure the User model is created only once
const User = models.User || model<TUser>("User", UserSchema)

export default User
