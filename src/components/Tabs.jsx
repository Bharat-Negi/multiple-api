import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTabs } from "../redux/features/searchSlice";

const Tabs = () => {
	const tab = ["Photo", "Video", "Gif"];
	const dispatch = useDispatch();
	const activeTab = useSelector((state) => state.search.activeTab);

	return (
		<div className="flex gap-4">
			{tab.map((elem, idx) => {
				return (
					<button
						key={idx}
						className={`${activeTab === elem ? "bg-green-500" : "bg-green-900"} px-5 py-2  text-white rounded cursor-pointer active:scale-95`}
						onClick={() => {
							dispatch(setActiveTabs(elem));
						}}
					>
						{elem}
					</button>
				);
			})}
		</div>
	);
};

export default Tabs;
