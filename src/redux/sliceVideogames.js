import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filterByName: [],
  allVideogames: [],
};

const videogamesHandler = createSlice({
  name: "videogames",
  initialState,
  reducers: {
    setFilterByName: (state, action) => {
      state.filterByName = action.payload;
    },
    setVideogames: (state, action) => {
      state.allVideogames = action.payload;
    },
  },
});

export const getVideogames = (state) => state.videogames.allVideogames;

export const { setVideogames, setFilterByName } = videogamesHandler.actions;

export default videogamesHandler.reducer;
