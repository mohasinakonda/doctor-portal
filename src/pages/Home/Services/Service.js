import React from "react"

const Service = ({ service }) => {
	return (
		<div class="card bg-base-100 shadow-xl">
			<figure>
				<img src={service.img} alt="Shoes" />
			</figure>
			<div class="card-body">
				<h2 class="card-title justify-center">{service.title}</h2>
				<p className="">If a dog chews shoes whose shoes does he choose?</p>
			</div>
		</div>
	)
}

export default Service
