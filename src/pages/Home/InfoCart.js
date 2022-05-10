import React from "react"

const InfoCart = ({ info }) => {
	return (
		<div>
			<div
				className={`card lg:card-side text-white shadow-xl ${info.bgColor}
`}
			>
				<figure className="px-5">
					<img src={info.img} alt="Album" />
				</figure>
				<div class="card-body">
					<h2 class="card-title">{info.title}</h2>
					<p>Click the button to listen on Spotiwhy app.</p>
				</div>
			</div>
		</div>
	)
}

export default InfoCart
