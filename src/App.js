import { Route, Routes } from "react-router-dom"
import "./App.css"
import Appointment from "./pages/Appointment/Appointment"
import Home from "./pages/Home/Home"
import Login from "./pages/LoginRegister/Login"
import Navbar from "./pages/Shared/Navbar"

function App() {
	return (
		<div className="px-12 max-w-7xl mx-auto">
			<Navbar></Navbar>
			<Routes>
				<Route path="/" element={<Home></Home>}></Route>
				<Route path="/login" element={<Login></Login>}></Route>

				<Route
					path="/appointment"
					element={<Appointment></Appointment>}
				></Route>
			</Routes>
		</div>
	)
}

export default App
