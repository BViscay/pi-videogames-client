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
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Validaciones
    if (
      !formData.name ||
      !formData.description ||
      !formData.released ||
      !formData.rating ||
      !formData.image ||
      !formData.released
    ) {
      alert("Por favor, completa todos los campos.");
      return;
    } else if (isNaN(formData.rating) && formData.rating > 5) {
      alert("El rating debe ser un número menor a Cinco");
      return;
    } else if (regexDate.test(formData.released)) {
      alert("La fecha debe ser YYYY/MM/DD");
      return;
    } else {
      await axios
        .post(API_URL_VIDEOGAME, formData)
        .then(({ data }) => {
          if (data) {
            alert("El videojuego ha sido creado con exito");
            navigate("/home");
          }
        })
        .catch((error) => {
          if (error.response) {
            console.log("Response Data:", error.response.data);
          }
        });
    }
  };

  return { formData, handleChange, handleSubmit };
};
export default useForm;
