import React from "react"

const AppointmentCard = ({ service, setTreatment }) => {
	const { avialable } = service
	return (
		<div className="card  bg-base-100 shadow-xl text-center">
			<div className="card-body">
				<h2 className="text-xl text-secondary font-bold">{service.name}</h2>
				<p>{avialable[0]}</p>
				<p className="text-red-400">
					{avialable.length === 0 && " Try another day"}
				</p>
				<p className="uppercase">
					{avialable.length} {avialable.length > 1 ? "spaces" : "space"} available
				</p>
				<div className="card-actions justify-center">
					<label
						for="booking-modal"
						onClick={() => setTreatment(service)}
						disabled={avialable.length === 0}
						className="btn btn-primary  bg-gradient-to-r from-primary to-secondary"
					>
						Make Appointment
					</label>
				</div>
			</div>
		</div>
	)
}

export default AppointmentCard
