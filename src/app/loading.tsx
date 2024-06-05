"use client"
import ClipLoader from "react-spinners/ClipLoader"

const loading = ({ loading }: any) => {
	const override = {
		display: "block",
		margin: "100px auto",
	}

	return (
		<ClipLoader
			color="#1d4ed8"
			loading={loading}
			cssOverride={override}
			size={150}
			aria-label="Loading Spinner"
		/>
	)
}

export default loading
