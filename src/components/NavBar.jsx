import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
	return (
		<div className="px-5 py-3 bg-(--C1) flex justify-between">
			<h1 className="text-white font-medium text-2xl">Media Web</h1>
			<div className="flex gap-3 text-sm">
				<Link to="/" className="px-5 py-1 bg-white rounded active:scale-95">
					Search
				</Link>
				<Link
					to="/collection"
					className="px-5 py-1 bg-white rounded active:scale-95"
				>
					Collection
				</Link>
			</div>
		</div>
	);
};

export default NavBar;
