import React from "react"
import fluoride from "../../assets/images/fluoride.png"
import cavity from "../../assets/images/cavity.png"
import whitening from "../../assets/images/whitening.png"
import Service from "./Service"

const Services = () => {
	const services = [
		{
			_id: 1,
			title: "Fluoride Treatment",
			description: "",
			img: fluoride,
		},
		{
			_id: 2,
			title: "Cavity Filling",
			description: "",
			img: cavity,
			bgColor: "bg-accent",
		},
		{
			_id: 3,
			title: "Teeth Whitening",
			description: "",
			img: whitening,
		},
	]
	return (
		<div>
			<div className="text-center py-12">
				<h4 className="text-primary text-2xl text-bold uppercase ">
					our services
				</h4>
				<h3 className="text-4xl">Services We Provide</h3>
			</div>
			<div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 ">
				{services.map((service) => (
					<Service key={service._id} service={service}></Service>
				))}
			</div>
		</div>
	)
}

export default Services
