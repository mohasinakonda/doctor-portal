import React from "react"
import Banner from "./Banner"
import DoctorInfo from "./DoctorInfo"
import Info from "./Info"
import Services from "./Services/Services"

const Home = () => {
	return (
		<div>
			<Banner></Banner>
			<hr />
			<Info></Info>
			<Services></Services>
			<DoctorInfo></DoctorInfo>
		</div>
	)
}

export default Home
