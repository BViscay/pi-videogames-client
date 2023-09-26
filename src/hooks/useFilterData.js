import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getVideogames } from "../redux/sliceVideogames";
import {
  getRenderVideogames,
  setRenderVideogames,
  resetFiltersData,
  setFiltersData,
  setFilterByName,
} from "../redux/sliceFilters";

const useFilterData = () => {
  const allVideogames = useSelector(getVideogames);
  const renderVideogames = useSelector(getRenderVideogames);
  const dispatch = useDispatch();

  useEffect(() => {
    if (renderVideogames.length < 1) {
      dispatch(setRenderVideogames(allVideogames));
    }
    //eslint-disable-next-line
  }, [allVideogames]);

  const filterByName = (searchedName) => {
    const filterVideogame = renderVideogames.filter((videogame) =>
      videogame.name.toLowerCase().includes(searchedName.toLowerCase())
    );

    dispatch(setFilterByName(filterVideogame));
  };

  const filterByGenre = (genre) => {
    if (genre === "Generos") {
      dispatch(setRenderVideogames(renderVideogames));
    } else {
      const genreFiltered = renderVideogames.filter((game) =>
        game.genres.includes(genre)
      );
      dispatch(setRenderVideogames(genreFiltered));
      dispatch(setFiltersData(genre));
    }
  };

  const filterByFirstLetter = (order) => {
    if (order === "Order") {
      dispatch(setRenderVideogames(renderVideogames));
    } else if (order === "A-Z") {
      const ascendentOrder = [...renderVideogames];
      ascendentOrder.sort((a, b) => {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
      });
      dispatch(setFiltersData(order));
      dispatch(setRenderVideogames(ascendentOrder));
    } else if (order === "Z-A") {
      const descendentOrder = [...renderVideogames];
      descendentOrder.sort((a, b) => {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();
        if (nameA > nameB) return -1;
        if (nameA < nameB) return 1;
      });
      dispatch(setFiltersData(order));
      dispatch(setRenderVideogames(descendentOrder));
    }
  };

  const filterByRating = (rating) => {
    if (rating === "rating") {
      dispatch(setRenderVideogames(renderVideogames));
    } else if (rating === "Mayor") {
      const descendentOrder = [...renderVideogames];
      descendentOrder.sort((a, b) => {
        const nameA = a.rating;
        const nameB = b.rating;
        if (nameA > nameB) return -1;
        if (nameA < nameB) return 1;
      });
      dispatch(setFiltersData(rating));
      dispatch(setRenderVideogames(descendentOrder));
    } else if (rating === "Menor") {
      const ascendentOrder = [...renderVideogames];
      ascendentOrder.sort((a, b) => {
        const nameA = a.rating;
        const nameB = b.rating;
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
      });

      dispatch(setFiltersData(rating));
      dispatch(setRenderVideogames(ascendentOrder));
    }
  };

  const filterByOrigin = (order) => {
    if (order === "Todos") {
      dispatch(setRenderVideogames(renderVideogames));
    } else if (order === "BDD") {
      const BDDFilter = allVideogames.filter(
        (videogame) => videogame.createInDb === true
      );
      dispatch(setFiltersData(order));
      dispatch(setRenderVideogames(BDDFilter));
    } else if (order === "API") {
      const APIFilter = allVideogames.filter(
        (videogame) => !videogame.createInDb
      );
      dispatch(setFiltersData(order));
      dispatch(setRenderVideogames(APIFilter));
    }
  };

  const resetFilters = () => {
    dispatch(resetFiltersData([]));
    dispatch(setRenderVideogames(allVideogames));
  };

  return {
    renderVideogames,
    filterByName,
    filterByGenre,
    filterByFirstLetter,
    filterByRating,
    filterByOrigin,
    resetFilters,
  };
};

export default useFilterData;
