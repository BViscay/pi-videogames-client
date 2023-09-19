import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allVideogames: [],
};

const videogamesHandler = createSlice({
  name: "videogames",
  initialState,
  reducers: {
    setVideogames: (state, action) => {
      state.allVideogames = action.payload;
    },
  },
});

export const getVideogames = (state) => state.videogames.allVideogames;

export const { setVideogames } = videogamesHandler.actions;

export default videogamesHandler.reducer;
