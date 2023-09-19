import axios from "axios";
import { useState } from "react";
import { API_URL_VIDEOGAMES } from "../config/api";
import { useDispatch, useSelector } from "react-redux";
import { setVideogames, getVideogames } from "../redux/sliceVideogames";
import { setFilterByName } from "../redux/sliceFilters";

const useDataVideogames = () => {
  const dispatch = useDispatch();
  const videogames = useSelector(getVideogames);
  const [detVideogame, setDetVideogame] = useState({});

  const fetchVideogamesData = async () => {
    try {
      const response = await axios(API_URL_VIDEOGAMES);
      const { data } = response;

      dispatch(setVideogames(data));
    } catch (error) {
      console.error(error);
      window.alert("Error al cargar la información del servidor");
    }
  };

  const detailVideogame = async (id) => {
    try {
      const response = await axios(`${API_URL_VIDEOGAMES}/${id}`);
      if (response.data.name) {
        setDetVideogame(response.data);
      }
    } catch (error) {
      console.log(error);
      window.alert("No existe un personaje con ese ID ERROR");
    }
  };

  const onSearch = (searchName) => {
    const filterVideogame = videogames.filter((videogame) =>
      videogame.name.toLowerCase().includes(searchName.toLowerCase())
    );
    console.log(filterVideogame);

    dispatch(setFilterByName(filterVideogame));
  };

  return {
    onSearch,
    fetchVideogamesData,
    detailVideogame,
    detVideogame,
  };
};

export default useDataVideogames;
