import React from "react";
import { useDispatch } from "react-redux";
import { addCollection, addedToast } from "../redux/features/collectionSlice";

export const ResultCard = ({ item }) => {
	const dispatch = useDispatch();

	const addToCollection = (item) => {
		dispatch(addCollection(item));
		dispatch(addedToast());
	};

	const truncate = (text, limit = 18) =>
		text.length > limit ? text.slice(0, limit) + "..." : text;
	return (
		<div className="w-70 h-70 bg-white rounded relative">
			<div className="h-full">
				{item.type == "Photo" ? (
					<img
						className="h-full w-full object-cover object-center"
						src={item.src}
						alt=""
					/>
				) : (
					""
				)}
				{item.type == "Video" ? (
					<video
						autoPlay
						loop
						muted
						src={item.src}
						className="h-full w-full object-cover object-center"
					></video>
				) : (
					""
				)}
				{item.type == "Gif" ? (
					<img
						className="h-full w-full object-cover object-center"
						src={item.src}
						alt=""
					/>
				) : (
					""
				)}
			</div>
			<div className="absolute bottom-0 left-0 bg-white bg-opacity-75 px-4 py-2 w-full flex justify-between">
				<h1>{truncate(item.title)}</h1>
				<button
					onClick={() => {
						addToCollection(item);
					}}
					className="bg-red-700 text-white rounded cursor-pointer px-4 py-1 text-sm active:scale-95"
				>
					Save
				</button>
			</div>
		</div>
	);
};
