import React from "react"
import { DayPicker } from "react-day-picker"
import "react-day-picker/dist/style.css"
import { format } from "date-fns"
import chair from "../assets/images/chair.png"
import bgImg from "../assets/images/bg.png"
const Appointment = ({ date, setDate }) => {
	return (
		<div
			style={{ background: `url(${bgImg})` }}
			className="hero min-h-screen 
		"
		>
			<div className="hero-content flex-col lg:flex-row-reverse">
				<img
					style={{ width: "590px", height: "350px" }}
					src={chair}
					alt=""
					className="max-w-sm rounded-lg shadow-2xl ]"
				/>
				{/* <div className="card">
					<DayPicker></DayPicker>
				</div> */}
				<div className="card  bg-base-100 shadow-xl">
					<div className="card-body">
						<DayPicker
							mode="single"
							selected={date}
							onSelect={setDate}
						></DayPicker>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Appointment
