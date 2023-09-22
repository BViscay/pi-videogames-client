import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filterByName: {},
  renderVideogames: [],
};

const filtersHandler = createSlice({
  name: "filterVg",
  initialState,
  reducers: {
    setFilterByName: (state, action) => {
      state.filterByName = action.payload;
    },
    setRenderVideogames: (state, action) => {
      state.renderVideogames = action.payload;
    },
  },
});

export const getFilterByName = (state) => state.filterVg.filterByName;
export const getRenderVideogames = (state) => state.filterVg.renderVideogames;

export const { setFilterByName, setRenderVideogames } = filtersHandler.actions;

export default filtersHandler.reducer;
