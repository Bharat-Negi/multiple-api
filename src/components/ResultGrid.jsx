import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos, fetchVideos } from "../api/mediaApi";
import {
	setLoading,
	setError,
	setResults,
} from "../redux/features/searchSlice";
import { ResultCard } from "./ResultCard";

const ResultGrid = () => {
	const dispatch = useDispatch();
	const { query, activeTab, results, loading, error } = useSelector(
		(store) => store.search,
	);

	useEffect(() => {
		const getData = async () => {
			if (!query) return;

			try {
				dispatch(setLoading());
				let data = [];
				if (activeTab == "Photo") {
					let response = await fetchPhotos(query);
					data = response.photos.map((items) => ({
						id: items.id,
						type: "Photo",
						title: items.photographer,
						thumbnail: items.src.tiny,
						src: items.src.landscape,
					}));
				}
				if (activeTab == "Video") {
					let response = await fetchVideos(query);
					data = response.videos.map((items) => ({
						id: items.id,
						type: "Video",
						title: items.user.name || "video",
						thumbnail: items.image,
						src: items.video_files[0].link,
					}));
				}
				if (activeTab == "Gif") {
					console.log("Pending....");
				}
				console.log(data);
				dispatch(setResults(data));
			} catch (err) {
				dispatch(setError(err.message));
			}
		};
		getData();
	}, [query, activeTab, dispatch]);

	if (error) return <h1>Error</h1>;
	if (loading) return <h1>Loading...</h1>;

	return (
		<div className="mt-4 flex flex-wrap gap-4">
			{results.map((items) => {
				return <ResultCard key={items.id} items={items} />;
			})}
		</div>
	);
};

export default ResultGrid;
