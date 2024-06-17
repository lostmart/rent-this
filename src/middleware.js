export { default } from "next-auth/middleware"

export const config = {
	matcher: ["/carsPage/addCar", "/profile", "/carsPage/savedCars", "/messages"],
}
