import React from "react"
import clock from "../assets/icons/clock.svg"
import marker from "../assets/icons/marker.svg"
import phone from "../assets/icons/phone.svg"
import InfoCart from "./InfoCart"

const Info = () => {
	const info = [
		{
			_id: 1,
			title: "Opening hour",
			description: "",
			img: clock,
			bgColor: "bg-primary bg-gradient-to-r from-primary to-secondary",
		},
		{
			_id: 2,
			title: "Visit our location",
			description: "",
			img: marker,
			bgColor: "bg-accent",
		},
		{
			_id: 3,
			title: "Contact us now",
			description: "",
			img: phone,
			bgColor: "bg-primary bg-gradient-to-r from-primary to-secondary",
		},
	]
	return (
		<div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
			{info.map((data) => (
				<InfoCart key={data._id} info={data}></InfoCart>
			))}
		</div>
	)
}

export default Info
