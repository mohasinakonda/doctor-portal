import { format } from "date-fns"
import React from "react"
import { toast } from "react-toastify"
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from "../../firebase.init";
const BookingModal = ({ treatment, setTreatment, date, refetch }) => {
	const { name, avialable } = treatment
	const [user] = useAuthState(auth)

	const handleBooking = (event) => {
		event.preventDefault()
		const treatmentName = treatment.name
		const name = event.target.name.value
		const email = event.target.email.value
		const phone = event.target.phone.value
		const date = event.target.date.value
		const slot = event.target.slot.value
		const bookings = { treatmentName, name, email, phone, date, slot }
		fetch('http://localhost:5000/booking', {
			method: "post",
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify(bookings)
		}).then(res => res.json())
			.then(data => {

				if (data.success) {
					refetch()
					toast.success('your appointment is confirm')
				} else {
					toast.error('your appointment is  already exist')
				}
				console.log(data)
			})

		setTreatment(null)
	}
	return (
		<div>
			<input type="checkbox" id="booking-modal" class="modal-toggle" />

			<div class="modal" id="booking-modal">
				<div class="modal-box">
					<label
						for="booking-modal"
						class="btn btn-sm btn-circle absolute right-2 top-2"
					>
						✕
					</label>
					<h3 class="font-bold text-lg"> Booking for :{name}</h3>
					<form
						onSubmit={handleBooking}
						className="grid grid-cols-1 gap-3 justify-center"
					>
						<input
							type="text"
							value={format(date, "PP")}
							name='date'
							disabled
							readOnly
							class="input input-bordered input-secondary w-full "
						/>
						<input
							type="text"
							value={avialable[0]}
							disabled
							readOnly
							class="input input-bordered input-secondary w-full "
						/>
						<select
							name="slot"
							class="select w-full input-bordered input-secondary  "
						>
							{avialable.map((slot) => (
								<option value={slot}>{slot}</option>
							))}
						</select>
						<input
							type="text"
							name='name'

							value={user.displayName || 'unknown'}
							disabled
							readOnly
							class="input input-bordered input-secondary w-full "
						/>
						<input
							type="email"
							name='email'
							value={user.email}
							disabled
							readOnly
							class="input input-bordered input-secondary w-full "
						/>
						<input
							type="text"
							name='phone'
							placeholder="Phone number"
							class="input input-bordered input-secondary w-full "
						/>
						<input
							type="submit"
							value="book"
							class=" btn bg-secondary w-full text-white "
						/>
					</form>
				</div>
			</div>
		</div>
	)
}

export default BookingModal
