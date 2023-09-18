import { configureStore } from "@reduxjs/toolkit";
import videogamesHandler from "./sliceVideogames"
import filtersHandler from "./sliceFilters"

export const store = configureStore({
  reducer: {
    videogames: videogamesHandler,
    filterVg: filtersHandler,
  },
});
