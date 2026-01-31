import ResultGrid from "./components/ResultGrid";
import SearchBar from "./components/SearchBar";
import Tabs from "./components/Tabs";

function App() {
	return (
		<>
			<SearchBar />
			<div className="p-5 bg-gray-100 min-h-screen">
				<Tabs />
				<ResultGrid />
			</div>
		</>
	);
}

export default App;
