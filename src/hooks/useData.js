import axios from "axios";
import { useState } from "react";
import {
  API_URL_VIDEOGAMES,
  API_URL_GENRES,
  API_URL_DELETEVIDEOGAME,
  API_URL_UPDATEVIDEOGAME,
} from "../config/api";
import { useDispatch } from "react-redux";
import { setVideogames } from "../redux/sliceVideogames";
import { setGenres } from "../redux/sliceGenres";
import { useNavigate } from "react-router-dom";

const useDataVideogames = () => {
  const dispatch = useDispatch();

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

  const updateVideogame = async (id, newRating) => {
    try {
      const response = await axios.patch(`${API_URL_UPDATEVIDEOGAME}/${id}`, {
        newRating: newRating,
      });
      if (response.data.id === id) {
        window.alert(
          `El videogame ${response.data.name} tiene un nuevo rating: ${response.data.rating}`
        );
        navigate("/home");
      }
    } catch (error) {
      console.error(error);
      window.alert("Error al cambiar el rating del videogame");
    }
  };

  return {
    fetchVideogamesData,
    genresData,
    detailVideogame,
    deleteVideogame,
    updateVideogame,
    detVideogame,
  };
};

export default useDataVideogames;
