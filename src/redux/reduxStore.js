import { configureStore } from "@reduxjs/toolkit";
import videogamesHandler from "./sliceVideogames";
import filtersHandler from "./sliceFilters";
import genresHandler from "./sliceGenres";

export const store = configureStore({
  reducer: {
    videogames: videogamesHandler,
    genres: genresHandler,
    filterVg: filtersHandler,
  },
});
