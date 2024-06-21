import { getServerSession } from "next-auth/next"
import { authOptions } from "@/utils/authOptions"

type UserPromise = {
	user: string | object
	userId: string
}

export const getSessionUser = async (): Promise<UserPromise | null> => {
	try {
		const session = await getServerSession(authOptions)

		if (!session || !session.user) {
			return null
		}

		return {
			user: session.user,
			userId: session.user.id,
		}
	} catch (error) {
		console.error(error)
		return null
	}
}
