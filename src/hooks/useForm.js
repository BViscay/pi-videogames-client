import { useState } from "react";
import { API_URL_VIDEOGAME } from "../config/api";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { formValidation } from "../config/formValidation";

const useForm = () => {
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
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    setErrors(formValidation({ ...formData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const errors = formValidation(formData);

    if (Object.keys(errors).length > 0) {
      alert("Por favor, corrige los errores en el formulario.");
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

  return { formData, errors, handleChange, handleSubmit };
};

export default useForm;
