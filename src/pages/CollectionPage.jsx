import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CollectionCard } from "../components/CollectionCard";
import {
	clearCollection,
	removeToast,
} from "../redux/features/collectionSlice";

const CollectionPage = () => {
	const collection = useSelector((state) => state.collection.items);
	const dispatch = useDispatch();

	const clearAllCollection = (item) => {
		dispatch(clearCollection());

		if (collection.length > 0) {
			dispatch(removeToast("Remove All Collection"));
		}
	};

	return (
		<>
			<div className="px-5 py-3 flex pb-0 justify-between">
				{collection.length > 0 ? (
					<h1 className="text-base font-semibold">
						{collection.length} Collection There
					</h1>
				) : (
					<h1 className="text-base font-semibold">
						{collection.length} Collection There
					</h1>
				)}

				<button
					onClick={() => {
						clearAllCollection();
					}}
					className="bg-red-700 text-white rounded cursor-pointer px-4 py-1 text-sm active:scale-95"
				>
					Clear Collection
				</button>
			</div>
			<div className="mt-4 flex flex-wrap gap-4 px-5">
				{collection.map((item) => {
					return <CollectionCard key={item.id} item={item} />;
				})}
			</div>
		</>
	);
};

export default CollectionPage;
