import React from "react"

const Review = ({ review }) => {
	return (
		<div className="card  bg-base-100 shadow-xl ">
			<div className="card-body">
				<p>{review.review}</p>
				<div>
					<div className="flex  items-center">
						<div className=" rounded-full ring ring-secondary  ring-offset-2">
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
