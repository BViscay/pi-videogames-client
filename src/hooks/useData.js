import axios from "axios";
import { useState } from "react";
import {
  API_URL_VIDEOGAMES,
  API_URL_GENRES,
  API_URL_DELETEVIDEOGAME,
} from "../config/api";
import { useDispatch, useSelector } from "react-redux";
import { setVideogames, getVideogames } from "../redux/sliceVideogames";
import { setGenres } from "../redux/sliceGenres";
import { setFilterByName } from "../redux/sliceFilters";
import { useNavigate } from "react-router-dom";

const useDataVideogames = () => {
  const dispatch = useDispatch();
  const videogames = useSelector(getVideogames);
  const [detVideogame, setDetVideogame] = useState({});
  const navigate = useNavigate();

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

  const genresData = async () => {
    try {
      const response = await axios(API_URL_GENRES);
      const { data } = response;

      const genres = data.map((genre) => genre.name);

      dispatch(setGenres(genres));
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

  const deleteVideogame = async (id) => {
    try {
      const response = await axios.delete(`${API_URL_DELETEVIDEOGAME}/${id}`);
      window.alert(response.data);
      navigate("/home");
    } catch (error) {
      console.error(error);
      window.alert("Error al borrar el videogame");
    }
  };

  return {
    onSearch,
    fetchVideogamesData,
    genresData,
    detailVideogame,
    deleteVideogame,
    detVideogame,
  };
};

export default useDataVideogames;
