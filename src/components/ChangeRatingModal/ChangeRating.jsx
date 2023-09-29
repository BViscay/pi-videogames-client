import styles from "./ChangeRating.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useData from "../../hooks/useData";

export default function ChangeRating({ onClose, id }) {
  const { updateVideogame } = useData();
  const [newRating, setNewRating] = useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { value } = event.target;
    setNewRating(value);
  };

  const handleClick = () => {
    updateVideogame(id, newRating);
    navigate("/home");
  };

  return (
    <div className={styles.container}>
      <div className={styles.container}>
        <div className={styles.modal}>
          <div className={styles.titleCont}>
            <h1 className={styles.title}>MODIFICA EL RATING</h1>
            <button className={styles.button} onClick={onClose}>
              X
            </button>
          </div>
          <p className={styles.paragraph} type="Calificación:">
            <input
              className={styles.input}
              name="newRating"
              type="text"
              placeholder="Ingresa la nueva calificación"
              onChange={handleChange}
            ></input>
          </p>
          <button className={styles.changeBtn} onClick={handleClick}>
            Cambiar
          </button>
        </div>
      </div>
    </div>
  );
}
