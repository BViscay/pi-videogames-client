import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filtersData: [],
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
    setFiltersData: (state, action) => {
      state.filtersData.push(action.payload);
    },
    resetFiltersData: (state, action) => {
      state.filtersData = action.payload;
    },
  },
});

export const getFilterByName = (state) => state.filterVg.filterByName;
export const getRenderVideogames = (state) => state.filterVg.renderVideogames;
export const getFiltersData = (state) => state.filterVg.filtersData;

export const {
  setFilterByName,
  setRenderVideogames,
  setFiltersData,
  resetFiltersData,
} = filtersHandler.actions;

export default filtersHandler.reducer;
