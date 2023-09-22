import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allGenres: [],
};

const genesHandler = createSlice({
  name: "genres",
  initialState,
  reducers: {
    setGenres: (state, action) => {
      state.allGenres = action.payload;
    },
  },
});

export const getGenres = (state) => state.genres.allGenres;

export const { setGenres } = genesHandler.actions;

export default genesHandler.reducer;
