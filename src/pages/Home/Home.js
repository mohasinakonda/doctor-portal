import React from "react"
import Banner from "./Banner"
import Treatment from "./Treatment"
import Info from "./Info"
import Services from "./Services/Services"
import Testimonial from "./Testimonial"
import CustomersReviews from "./CustomersReviews"
import ContactUs from "./ContactUs"
import Footer from "../Shared/Footer"

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
			<ContactUs></ContactUs>
			<Footer></Footer>
		</div>
	)
}

export default Home
