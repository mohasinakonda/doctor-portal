import React from "react"
import bgImg from "../assets/images/appointment.png"
const ContactUs = () => {
	return (
		<div style={{ background: `url(${bgImg})` }} className="pt-5">
			<h3 className="text-secondary text-center text-xl">Contact us</h3>
			<h3 className="text-3xl text-center">Stay connected with us</h3>
			<form className="grid grid-cols-1 justify-center gap-3 pt-6">
				<input
					type="email"
					placeholder="Email address"
					className="input input-bordered input-secondary w-3/4 mx-auto"
				/>
				<input
					type="text"
					placeholder="Subject"
					className="input input-bordered input-secondary w-3/4 mx-auto"
				/>
				<textarea
					name=""
					id=""
					cols="30"
					rows="10"
					placeholder="massage"
					className="input input-bordered input-secondary w-3/4 mx-auto "
				></textarea>
				<input
					type="submit"
					value="submit"
					className="btn-sm btn-secondary w-32 mx-auto"
				/>
			</form>
		</div>
	)
}

export default ContactUs
