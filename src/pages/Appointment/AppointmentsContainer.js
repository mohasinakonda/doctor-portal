import { format } from "date-fns"
import React, { useEffect, useState } from "react"
import AppointmentCard from "./AppointmentCard"
import BookingModal from "./BookingModal"

const AppointmentsCard = ({ date }) => {
	const [services, setService] = useState([])
	const [treatment, setTreatment] = useState(null)
	useEffect(() => {
		fetch("http://localhost:5000/services")
			.then((res) => res.json())
			.then((data) => setService(data))
	}, [])
	return (
		<div>
			<div className="text-center text-secondary  font-bold text-xl py-24">
				Available Appointment on {format(date, "PP")}
			</div>
			<div className="grid lg:grid-cols-3 gap-9">
				{services.map((service) => (
					<AppointmentCard
						key={service._id}
						service={service}
						date={date}
						setTreatment={setTreatment}
					/>
				))}
			</div>
			{treatment && (
				<BookingModal
					treatment={treatment}
					setTreatment={setTreatment}
					date={date}
				></BookingModal>
			)}
		</div>
	)
}

export default AppointmentsCard
