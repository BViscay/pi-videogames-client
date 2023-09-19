import styles from "./DetailGame.module.css";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useData from "../../hooks/useData";

export default function DetailGame() {
  const { id } = useParams();
  const { detailVideogame, detVideogame } = useData();

  useEffect(() => {
    if (!detVideogame.id) {
      detailVideogame(id);
    }
  }, [id, detVideogame.id, detailVideogame]);

  return (
    <div>
      {detVideogame.name && (
        <div className={styles.container}>
          <div className={styles.imgContainer}>
            <img
              src={detVideogame.image}
              alt="videogame-image"
              className={styles.img}
            />
          </div>
          <div className={styles.dataContainer}>
            <h1 className={styles.title}>DETALLES DEL JUEGO</h1>
            <h2 className={styles.name}>
              Nombre: <span className={styles.resalt}>{detVideogame.name}</span>
            </h2>
            <p className={styles.subtitle}>
              Descripción:{" "}
              <span
                className={styles.resalt}
                dangerouslySetInnerHTML={{ __html: detVideogame.description }}
              />
            </p>
            <p className={styles.subtitle}>
              Generos:{" "}
              <span className={styles.resalt}>
                {detVideogame.genres.map((genre, index) => (
                  <ul key={index}>{genre}</ul>
                ))}
              </span>
            </p>
            <p className={styles.subtitle}>
              Fecha de Presentación:{" "}
              <span className={styles.resalt}>{detVideogame.released}</span>
            </p>
            <p className={styles.subtitle}>
              Puntuación:{" "}
              <span className={styles.resalt}>{detVideogame.rating}</span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
