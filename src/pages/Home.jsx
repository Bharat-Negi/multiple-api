import SearchBar from "../components/SearchBar";
import Tabs from "../components/Tabs";
import ResultGrid from "../components/ResultGrid";
import { useSelector } from "react-redux";

export const Home = () => {
	const { query } = useSelector((store) => store.search);

	return (
		<>
			<SearchBar />

			{query != "" ? (
				<div className="p-5 bg-gray-100 min-h-[calc(100vh-58px)">
					<Tabs />
					<ResultGrid />
				</div>
			) : (
				""
			)}
		</>
	);
};
