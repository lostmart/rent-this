import mongoose from "mongoose"

let connected = false

const conectDB = async () => {
	mongoose.set("strictQuery", true)

	// check connection
	if (connected) {
		return console.log("already connected to DB")
	}
	// connect to MongoDB
	try {
		if (process.env.MONGO_DB_URI) {
			await mongoose.connect(process.env.MONGO_DB_URI)
			console.log("connected !! ✅ ")
			connected = true
		}
	} catch (error) {
		console.log("error ❌", error)
		connected = false
	}
}

export default conectDB
