import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filterByName: {},
};

const filtersHandler = createSlice({
  name: "filterVg",
  initialState,
  reducers: {
    setFilterByName: (state, action) => {
      state.filterByName = action.payload;
    },
  },
});

export const getFilterByName = (state) => state.filterVg.filterByName;

export const { setFilterByName } = filtersHandler.actions;

export default filtersHandler.reducer;
