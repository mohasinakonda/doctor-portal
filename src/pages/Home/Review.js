import React from "react"

const Review = ({ review }) => {
	return (
		<div class="card  bg-base-100 shadow-xl ">
			<div class="card-body">
				<p>{review.review}</p>
				<div>
					<div class="flex  items-center">
						<div class=" rounded-full ring ring-secondary  ring-offset-2">
							<img src={review.img} alt="" />
						</div>
						<div className="mx-2">
							<p className="capitalize font-bold">{review.name}</p>
							<p>{review.location}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Review
