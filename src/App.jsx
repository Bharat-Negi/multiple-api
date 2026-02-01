import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import CollectionPage from "./pages/CollectionPage";
import NavBar from "./components/NavBar";
import { ToastContainer } from "react-toastify";

function App() {
	return (
		<>
			<NavBar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/collection" element={<CollectionPage />} />
			</Routes>
			<ToastContainer />
		</>
	);
}

export default App;
