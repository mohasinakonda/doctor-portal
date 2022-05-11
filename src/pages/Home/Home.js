import React from "react"
import Banner from "./Banner"
import Treatment from "./Treatment"
import Info from "./Info"
import Services from "./Services/Services"
import Testimonial from "./Testimonial"
import CustomersReviews from "./CustomersReviews"

const Home = () => {
	return (
		<div>
			<Banner></Banner>
			<hr />
			<Info></Info>
			<Services></Services>
			<Treatment></Treatment>
			<Testimonial></Testimonial>
			<CustomersReviews></CustomersReviews>
		</div>
	)
}

export default Home
