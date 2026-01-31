import { useState } from "react";
import { useDispatch } from "react-redux";
import { setQuery } from "../redux/features/searchSlice";

const SearchBar = () => {
	const [text, setText] = useState("");

	const dispatch = useDispatch();

	function searchHandel(e) {
		e.preventDefault();
		dispatch(setQuery(text));
		setText("");
	}

	return (
		<div className="p-4 bg-gray-500">
			<form onSubmit={searchHandel} className="flex gap-5">
				<input
					type="text"
					className="flex-1 rounded border-white bg-white px-5"
					value={text}
					placeholder="Search here..."
					onChange={(e) => setText(e.target.value)}
				/>
				<button className="bg-amber-100 px-5 py-2 rounded cursor-pointer active:scale-95">
					Search
				</button>
			</form>
		</div>
	);
};

export default SearchBar;
