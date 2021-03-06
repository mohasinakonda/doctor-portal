import { Route, Routes } from "react-router-dom"
import "./App.css"
import Appointment from "./pages/Appointment/Appointment"
import Home from "./pages/Home/Home"
import Login from "./pages/LoginRegister/Login"
import Register from "./pages/LoginRegister/Regiser"
import Navbar from "./pages/Shared/Navbar"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RequireAuth from "./RequireAuth"
import Deshboard from "./pages/Deshboard/Deshboard"
import AvialbleAppointment from "./pages/Deshboard/AvialbleAppointment"
import Doctors from "./pages/Deshboard/Doctors"
import History from "./pages/Deshboard/History"
import LoginAndREegister from "./pages/LoginRegister/LoginAndREegister"
function App() {
	return (
		<div className="px-12 max-w-7xl mx-auto">
			<Navbar></Navbar>
			<Routes>
				<Route path="/" element={<Home></Home>}></Route>
				<Route path="/login" element={<LoginAndREegister />}>


					<Route index element={<Login />}></Route>
					<Route path="register" element={<Register></Register>}></Route>
				</Route>

				<Route
					path="/appointment"
					element={
						<RequireAuth>
							<Appointment></Appointment>
						</RequireAuth>
					}
				></Route>
				<Route
					path="/deshboard"
					element={
						<RequireAuth>
							<Deshboard></Deshboard>
						</RequireAuth>
					}
				>
					<Route index element={<AvialbleAppointment />}></Route>
					<Route path="history" element={<History />}></Route>
				</Route>
			</Routes>
			<ToastContainer></ToastContainer>
		</div>
	)
}

export default App
