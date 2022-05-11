import React from "react"
import doctor from "../assets/images/doctor.png"
import bgImg from "../assets/images/appointment.png"
const Testimonial = () => {
	return (
		<div
			style={{ background: `url(${bgImg})` }}
			className="grid lg:grid-cols-2 items-center pt-6 sm:justify-center md:grid-cols-1 "
		>
			<div>
				<img className="mt-[-150px] hidden lg:block" src={doctor} alt="" />
			</div>
			<div className="sm:p-4 sm:w-full">
				<h3 className="text-secondary text-xl font-bold">Appointment</h3>
				<h2 className="text-3xl text-white sm:py-3">Make an Appointment</h2>
				<p className="text-white">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
					temporibus repellat modi at impedit quas unde aliquam id. Blanditiis
					dicta, qui, porro nihil maiores tempore deserunt, cum impedit nemo
					laudantium sapiente veritatis. Ab quos dolores dolorum sit officia
					similique fugiat.
				</p>
			</div>
		</div>
	)
}

export default Testimonial
