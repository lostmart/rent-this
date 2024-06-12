import Image from "next/image"
import React from "react"

type CarHeaderProps = {
	image: string
}

const CarHeaderImage = ({ image }: CarHeaderProps) => {
	return (
		<section>
			<div className="container-xl m-auto">
				<div className="grid grid-cols-1">
					<Image
						src={`/properties/${image}`}
						alt=""
						height={0}
						className="object-cover h-[400px] w-full"
						width={0}
						sizes="100vw"
						priority={true}
					/>
				</div>
			</div>
		</section>
	)
}

export default CarHeaderImage
