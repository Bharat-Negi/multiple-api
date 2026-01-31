import { fetchPhotos, fetchVideos } from "./api/mediaApi";
import SearchBar from "./components/SearchBar";

function App() {
	return (
		<>
			<SearchBar />
			<div>
				<button
					onClick={async () => {
						const data = await fetchPhotos("Cat");
						console.log(data.photos);
					}}
				>
					Get Photo
				</button>
				<button
					onClick={async () => {
						const data = await fetchVideos("Cat");
						console.log(data.videos);
					}}
				>
					Get Video
				</button>
			</div>
		</>
	);
}

export default App;
