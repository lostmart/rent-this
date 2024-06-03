import React from "react"

type InfoBoxProps = {
	heading: string
	backgroundColor: string
	textColor: string
	buttonInfo: {
		link: string
		text: string
		backgroundColor: string
	}
	children: React.ReactNode | string
}

const InfoBox = ({
	heading,
	backgroundColor,
	textColor,
	buttonInfo,
	children,
}: InfoBoxProps) => {
	return (
		<div className={`${backgroundColor} p-6 rounded-lg shadow-md`}>
			<h2 className={`${textColor} text-2xl font-bold`}>{heading}</h2>
			<p className={`${textColor} mt-2 mb-4`}>{children}</p>
			<a
				href={buttonInfo.link}
				className={`${buttonInfo.backgroundColor} inline-block text-white rounded-lg px-4 py-2 hover:opacity-80`}
			>
				{buttonInfo.text}
			</a>
		</div>
	)
}

export default InfoBox
