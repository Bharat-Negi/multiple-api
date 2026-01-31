import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
	name: "search",
	initialState: {
		query: "",
		activeTab: "",
		results: [],
		loading: false,
		error: null,
	},
	reducers: {
		setQuery(state, action) {
			state.query = action.payload;
		},
		setActiveTabs(state, action) {
			state.activeTab = action.payload;
		},
		setResults(state, action) {
			state.reducers = action.payload;
		},
		setLoading(state, action) {
			state.loading = action.payload;
		},
		setError(state, action) {
			state.error = action.payload;
		},
	},
});
