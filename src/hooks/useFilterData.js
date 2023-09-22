import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getVideogames } from "../redux/sliceVideogames";
import {
  getRenderVideogames,
  setRenderVideogames,
} from "../redux/sliceFilters";

const useFilterData = () => {
  const allVideogames = useSelector(getVideogames);
  const renderVideogames = useSelector(getRenderVideogames);
  const dispatch = useDispatch();

  useEffect(() => {
    if (allVideogames.length > 0) {
      dispatch(setRenderVideogames(allVideogames));
    }
    //eslint-disable-next-line
  }, [allVideogames]);

  const filterByGenre = (genre) => {
    if (genre === "Generos") {
      dispatch(setRenderVideogames(allVideogames));
    } else {
      const genreFiltered = allVideogames.filter((game) =>
        game.genres.includes(genre)
      );

      dispatch(setRenderVideogames(genreFiltered));
    }
  };

  const filterByFirstLetter = (order) => {
    if (order === "Order") {
      dispatch(setRenderVideogames(allVideogames));
    } else if (order === "A-Z") {
      const ascendentOrder = [...allVideogames];
      ascendentOrder.sort((a, b) => {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
      });

      dispatch(setRenderVideogames(ascendentOrder));
    } else if (order === "Z-A") {
      const descendentOrder = [...allVideogames];
      descendentOrder.sort((a, b) => {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();
        if (nameA > nameB) return -1;
        if (nameA < nameB) return 1;
      });

      dispatch(setRenderVideogames(descendentOrder));
    }
  };

  const filterByRating = (rating) => {
    if (rating === "rating") {
      dispatch(setRenderVideogames(allVideogames));
    } else if (rating === "Mayor") {
      const descendentOrder = [...allVideogames];
      descendentOrder.sort((a, b) => {
        const nameA = a.rating;
        const nameB = b.rating;
        if (nameA > nameB) return -1;
        if (nameA < nameB) return 1;
      });
      dispatch(setRenderVideogames(descendentOrder));
    } else if (rating === "Menor") {
      const ascendentOrder = [...allVideogames];
      ascendentOrder.sort((a, b) => {
        const nameA = a.rating;
        const nameB = b.rating;
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
      });
      dispatch(setRenderVideogames(ascendentOrder));
    }
  };

  const filterByOrigin = (order) => {
    if (order === "Todos") {
      dispatch(setRenderVideogames(allVideogames));
    } else if (order === "BDD") {
      const BDDFilter = allVideogames.filter(
        (videogame) => videogame.createInDb === true
      );
      dispatch(setRenderVideogames(BDDFilter));
    } else if (order === "API") {
      const APIFilter = allVideogames.filter(
        (videogame) => !videogame.createInDb
      );
      dispatch(setRenderVideogames(APIFilter));
    }
  };

  return {
    renderVideogames,
    filterByGenre,
    filterByFirstLetter,
    filterByRating,
    filterByOrigin,
  };
};

export default useFilterData;
