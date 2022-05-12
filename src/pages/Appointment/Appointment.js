import React, { useState } from "react"
import AppointmentBanner from "./AppointmentBanner"
import AppointmentsContainer from "./AppointmentsContainer"
import Footer from "../Shared/Footer"

const Appointment = () => {
	const [date, setDate] = useState(new Date())
	return (
		<div>
			<AppointmentBanner date={date} setDate={setDate}></AppointmentBanner>
			<AppointmentsContainer date={date}></AppointmentsContainer>
			<Footer></Footer>
		</div>
	)
}

export default Appointment
