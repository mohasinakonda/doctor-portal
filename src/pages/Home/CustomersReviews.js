import React from "react"
import quote from "../assets/icons/quote.svg"
import people1 from "../assets/images/people1.png"
import people2 from "../assets/images/people2.png"
import people3 from "../assets/images/people3.png"
import Review from "./Review"

const CustomersReviews = () => {
	const reviews = [
		{
			_id: 1,
			name: "herry poter",
			location: "USA texas",
			review:
				"this is nice doctor portal I ever seen, love it see test their service,this is nice doctor portal I ever seen, love it see test their servicethis is nice doctor",
			img: people1,
		},
		{
			_id: 2,
			name: "michel jeshone",
			location: "UK  London",
			review:
				"this is nice doctor portal I ever seen, love it see test their service,this is nice doctor portal I ever seen, love it see test their servicethis is nice doctor ",
			img: people2,
		},
		{
			_id: 3,
			name: "henry nicholus",
			location: "USA california",
			review:
				"this is nice doctor portal I ever seen, love it see test their service,this is nice doctor portal I ever seen, love it see test their servicethis is nice doctor",
			img: people3,
		},
		{
			_id: 4,
			name: "henry nicholus",
			location: "Australia sydney",
			review:
				"this is nice doctor portal I ever seen, love it see test their service,this is nice doctor portal I ever seen, love it see test their servicethis is nice doctor",
			img: people2,
		},
		{
			_id: 5,
			name: "henry nicholus",
			location: "USA texas",
			review:
				"this is nice doctor portal I ever seen, love it see test their service,this is nice doctor portal I ever seen, love it see test their servicethis is nice doctor",
			img: people1,
		},
		{
			_id: 6,
			name: "henry nicholus",
			location: "USA texas",
			review:
				"this is nice doctor portal I ever seen, love it see test their service,this is nice doctor portal I ever seen, love it see test their servicethis is nice doctor",
			img: people3,
		},
	]
	return (
		<div className="pt-8">
			<div className="flex justify-between">
				<div>
					<h3 className="text-secondary font-bold">Testimonial</h3>
					<h3 className=" font-bold text-3xl">What are Customer says</h3>
				</div>
				<div>
					<img className="w-48" src={quote} alt="" />
				</div>
			</div>
			<div className="grid lg:grid-cols-3 gap-2 md:grid-cols-2 grid-cols-1">
				{reviews.map((data) => (
					<Review key={data._id} review={data}></Review>
				))}
			</div>
		</div>
	)
}

export default CustomersReviews
