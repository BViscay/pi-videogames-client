import styles from "./DetailGame.module.css";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useData from "../../hooks/useData";
import { useNavigate } from "react-router-dom";
import { RiDeleteBin3Line } from "react-icons/ri";

export default function DetailGame() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { detailVideogame, deleteVideogame, detVideogame } = useData();

  useEffect(() => {
    if (!detVideogame.id) {
      detailVideogame(id);
    }
  }, [id, detVideogame.id, detailVideogame]);

  const handleClick = () => {
    deleteVideogame(id);
  };

  return (
    <div className={styles.bg}>
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
            <div className={styles.idCont}>
              <p className={styles.id}>ID: {detVideogame.id}</p>
              {detVideogame.createInDb && (
                <button className={styles.deleteBtn} onClick={handleClick}>
                  <RiDeleteBin3Line />
                </button>
              )}
            </div>

            <h2 className={styles.name}>
              Nombre: <span className={styles.resalt}>{detVideogame.name}</span>
            </h2>
            <div className={styles.descriptionContainer}>
              <p className={styles.subtitle}>
                Descripción:{" "}
                <span
                  className={styles.resalt}
                  dangerouslySetInnerHTML={{ __html: detVideogame.description }}
                />
              </p>
            </div>
            <div className={styles.arrayCont}>
              <div>
                <p className={styles.subtitle}>
                  Generos:{" "}
                  <span className={styles.resalt}>
                    {detVideogame.genres.map((genre, index) => (
                      <ul key={index}>{genre}</ul>
                    ))}
                  </span>
                </p>
              </div>
              <div className={styles.platforms}>
                <p className={styles.subtitle}>
                  Plataformas:{" "}
                  <span className={styles.resalt}>
                    {detVideogame.platforms?.map((platform, index) => (
                      <ul key={index}>{platform}</ul>
                    ))}
                  </span>
                </p>
              </div>
            </div>
            <p className={styles.subtitle}>
              Fecha de Presentación:{" "}
              <span className={styles.resalt}>{detVideogame.released}</span>
            </p>
            <p className={styles.subtitle}>
              Puntuación:{" "}
              <span className={styles.resalt}>{detVideogame.rating}</span>
            </p>
          </div>
          <button className={styles.button} onClick={() => navigate("/home")}>
            X
          </button>
        </div>
      )}
    </div>
  );
}
