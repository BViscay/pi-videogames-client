import styles from "./NewGame.module.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import { getGenres } from "../../redux/sliceGenres";
import useForm from "../../hooks/useForm";

export default function NewGame() {
  const { formData, errors, handleChange, handleSubmit } = useForm();
  const allGenres = useSelector(getGenres);
  const [selectedGenres, setSelectedGenres] = useState([]);

  const handleGenres = (event) => {
    const { value } = event.target;
    setSelectedGenres((prevSelectedGenres) =>
      prevSelectedGenres.includes(value)
        ? prevSelectedGenres.filter((genre) => genre !== value)
        : [...prevSelectedGenres, value]
    );
  };

  const handlePlatformsChange = (event) => {
    const { value } = event.target;
    const platformsArray = value.split(",").map((platform) => platform.trim());
    formData.platforms = platformsArray;
  };

  formData.genres = selectedGenres;

  return (
    <div>
      <div className={styles.container}>
        <form id="gameForm" className={styles.form} onSubmit={handleSubmit}>
          <h2 className={styles.title}>CREA TU VIDEOGAME</h2>
          <div className={styles.inputsContainer}>
            <div className={styles.column}>
              <div className={styles.inputErrorCont}>
                <p className={styles.paragraph} type="Nombre:">
                  <input
                    className={styles.input}
                    name="name"
                    type="text"
                    placeholder="Nombre del videogame"
                    onChange={handleChange}
                  ></input>
                </p>
                {errors.name && (
                  <span className={styles.errors}>{errors.name}</span>
                )}
              </div>

              <div className={styles.inputErrorCont}>
                <p className={styles.paragraph} type="Descripción">
                  <input
                    className={styles.input}
                    name="description"
                    type="text"
                    placeholder="Breve descipción del videogame"
                    onChange={handleChange}
                  ></input>
                </p>
                {errors.description && (
                  <span className={styles.errors}>{errors.description}</span>
                )}
              </div>

              <div className={styles.inputErrorCont}>
                <p className={styles.paragraph} type="Lanzamiento:">
                  <input
                    className={styles.input}
                    name="released"
                    type="text"
                    placeholder="Fecha de lanzamiento"
                    onChange={handleChange}
                  ></input>
                </p>
                {errors.released && (
                  <span className={styles.errors}>{errors.released}</span>
                )}
              </div>

              <div className={styles.inputErrorCont}>
                <p className={styles.paragraph} type="Imagen:">
                  <input
                    className={styles.input}
                    name="image"
                    type="text"
                    placeholder="URL de la Imagen"
                    onChange={handleChange}
                  ></input>
                </p>
                {errors.image && (
                  <span className={styles.errors}>{errors.image}</span>
                )}
              </div>
            </div>
            <div className={styles.column}>
              <div className={styles.inputErrorCont}>
                <div className={styles.paragraph} type="Géneros:">
                  <select
                    className={styles.select}
                    name="genres"
                    id=""
                    multiple
                    onChange={handleGenres}
                    value={formData.genres}
                  >
                    {allGenres.map((genre, index) => (
                      <option key={index} value={genre}>
                        {genre}
                      </option>
                    ))}
                  </select>
                  <div className={styles.selectedGenres}>
                    <p className={styles.selected}>
                      Géneros seleccionados: {selectedGenres.join(", ")}
                    </p>
                  </div>
                  {errors.genres && (
                    <span className={styles.errors}>{errors.genres}</span>
                  )}
                </div>
              </div>

              <div className={styles.inputErrorCont}>
                <p className={styles.paragraph} type="Plataformas:">
                  <input
                    className={styles.input}
                    name="platforms"
                    type="text"
                    placeholder="Plataformas disponibles"
                    onChange={handlePlatformsChange}
                  ></input>
                </p>
                {errors.platforms && (
                  <span className={styles.errors}>{errors.platforms}</span>
                )}
              </div>

              <div className={styles.inputErrorCont}>
                <p className={styles.paragraph} type="Calificación:">
                  <input
                    className={styles.input}
                    name="rating"
                    type="text"
                    placeholder="Ingresa la calificación"
                    onChange={handleChange}
                  ></input>
                </p>
                {errors.rating && (
                  <span className={styles.errors}>{errors.rating}</span>
                )}
              </div>
            </div>
          </div>

          <button
            type="submit"
            className={
              Object.keys(errors).length != 0
                ? styles.disabledBtn
                : styles.button
            }
          >
            CREAR
          </button>
        </form>
      </div>
    </div>
  );
}
