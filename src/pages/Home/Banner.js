import React from "react"
import chair from "../assets/images/chair.png"
import bgBanner from "../assets/images/bg.png"

const Banner = () => {
	return (
		<div
			style={{ background: `url(${bgBanner}) ` }}
			className="hero min-h-screen "
		>
			<div className="hero-content flex-col lg:flex-row-reverse">
				<img
					src={chair}
					alt=""
					className="max-w-sm rounded-lg shadow-2xl sm:w-auto"
				/>
				<div>
					<h1 className="text-5xl font-bold uppercase">
						we are finding clean your teeth
					</h1>
					<p className="py-6">
						Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
						excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
						a id nisi.
					</p>
					<button className="btn btn-primary bg-gradient-to-r from-primary to-secondary">
						Get Started
					</button>
				</div>
			</div>
		</div>
	)
}

export default Banner
