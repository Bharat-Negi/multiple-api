import React from "react";

export const ResultCard = ({ items }) => {
	const truncate = (text, limit = 20) =>
		text.length > limit ? text.slice(0, limit) + "..." : text;
	return (
		<div className="w-70 h-70 bg-white rounded relative">
			<div className="h-full">
				{items.type == "Photo" ? (
					<img
						className="h-full w-full object-cover object-center"
						src={items.src}
						alt=""
					/>
				) : (
					""
				)}
				{items.type == "Video" ? (
					<video
						autoPlay
						loop
						muted
						src={items.src}
						className="h-full w-full object-cover object-center"
					></video>
				) : (
					""
				)}
			</div>
			<div className="absolute bottom-0 left-0 bg-white bg-opacity-75 px-5 py-2 w-full flex justify-between">
				<h1>{truncate(items.title)}</h1>
				<button className="bg-red-700 text-white rounded cursor-pointer px-4 py-1 text-sm active:scale-95">
					Save
				</button>
			</div>
		</div>
	);
};
