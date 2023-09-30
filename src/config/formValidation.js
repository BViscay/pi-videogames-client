export const regexDate = /^\d{4}-\d{2}-\d{2}$/;

export const regexName = /^[a-zA-Z\s]{5,25}$/;

export const regexImgUrl = /^(https?:\/\/)/i;

export const platformsRegex = /^(?:[^,]+(?:,|$))+$/i;

export const formValidation = (formData) => {
  const errors = {};

  if (!regexDate.test(formData.released)) {
    errors.released = "La fecha debe ser YYYY-MM-DD";
  }

  if (!regexName.test(formData.name)) {
    errors.name = "El nombre debe tener entre 5 y 20 caracteres";
  }

  if (!regexImgUrl.test(formData.image)) {
    errors.image = "Ingresa una URL válida";
  }

  if (
    isNaN(formData.rating) ||
    formData.rating <= 0.1 ||
    formData.rating >= 5.0
  ) {
    errors.rating = "Ingresa un número entre 0.1 y 5.0";
  }

  if (!formData.description) {
    errors.description = "El campo descripción es obligatorio";
  }

  if (formData.platforms.length < 1) {
    errors.platforms = "Selecciona al menos una plataforma";
  }

  if (!formData.genres.length === 0) {
    errors.genres = "Selecciona al menos un género";
  }

  return errors;
};
