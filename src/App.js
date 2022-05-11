import { Route, Routes } from "react-router-dom"
import "./App.css"
import Home from "./pages/Home/Home"
import Navbar from "./pages/Shared/Navbar"

function App() {
	return (
		<div className="px-12 max-w-7xl mx-auto">
			<Navbar></Navbar>
			<Routes>
				<Route path="/" element={<Home></Home>}></Route>
			</Routes>
		</div>
	)
}

export default App
