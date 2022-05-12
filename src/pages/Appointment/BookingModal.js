import { format } from "date-fns"
import React from "react"

const BookingModal = ({ treatment, setTreatment, date }) => {
	const { _id, name, slots } = treatment
	const handleBooking = (event) => {
		event.preventDefault()
		const slot = event.target.slot.value
		console.log(_id, slot, name)
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
							disabled
							readOnly
							class="input input-bordered input-secondary w-full "
						/>
						<input
							type="text"
							value={slots[0]}
							disabled
							readOnly
							class="input input-bordered input-secondary w-full "
						/>
						<select
							name="slot"
							class="select w-full input-bordered input-secondary  "
						>
							{slots.map((slot) => (
								<option value={slot}>{slot}</option>
							))}
						</select>
						<input
							type="text"
							placeholder="Full name"
							class="input input-bordered input-secondary w-full "
						/>
						<input
							type="text"
							placeholder="Phone number"
							class="input input-bordered input-secondary w-full "
						/>
						<input
							type="email"
							placeholder="Email"
							class="input input-bordered input-secondary w-full "
						/>
						<input
							type="submit"
							value="submit"
							class=" btn bg-secondary w-full text-white "
						/>
					</form>
				</div>
			</div>
		</div>
	)
}

export default BookingModal
