import { useState } from "react";
import { API_URL_VIDEOGAME } from "../config/api";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const useForm = () => {
  const regexDate = /^\d{4}-\d{2}-\d{2}$/;
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    image: "",
    description: "",
    platforms: [],
    released: "",
    rating: "",
    genres: [],
    createInDb: true,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  //Validaciones del form
  const validateFormData = () => {
    if (
      !formData.name ||
      !formData.image ||
      !formData.description ||
      formData.platforms.length === 0 ||
      !formData.released ||
      !formData.rating ||
      formData.genres.length === 0
    ) {
      alert("Por favor, completa todos los campos.");

      return false;
    } else if (
      isNaN(formData.rating) ||
      formData.rating <= 1 ||
      formData.rating >= 5
    ) {
      alert("El rating debe ser un número mayor a Uno y menor a Cinco");
      return false;
    } else if (!regexDate.test(formData.released)) {
      alert("La fecha debe ser YYYY-MM-DD");
      return false;
    }

    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Validaciones
    if (!validateFormData()) {
      return;
    } else {
      try {
        const response = await axios.post(API_URL_VIDEOGAME, formData);
        if (response.data) {
          alert("El videojuego ha sido creado con éxito");
          navigate("/home");
        }
      } catch (error) {
        if (error.response) {
          console.log("Response Data:", error.response.data);
        }
      }
    }
  };

  return { formData, handleChange, handleSubmit };
};

export default useForm;
