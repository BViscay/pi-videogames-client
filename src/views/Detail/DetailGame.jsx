import styles from "./DetailGame.module.css";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useData from "../../hooks/useData";
import useModal from "../../hooks/useModal";
import ChangeRating from "../../components/ChangeRatingModal/ChangeRating";

export default function DetailGame() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { detailVideogame, deleteVideogame, detVideogame } = useData();
  const { isModalOpen, handleCloseModal, handleOpenModal } = useModal();

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
                  <span className="material-symbols-outlined">
                    delete_forever
                  </span>
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
                <div className={styles.subtitle}>
                  Generos:{" "}
                  <span className={styles.resalt}>
                    {detVideogame.genres.map((genre, index) => (
                      <p key={index}>{genre}</p>
                    ))}
                  </span>
                </div>
              </div>
              <div className={styles.platforms}>
                <div className={styles.subtitle}>
                  Plataformas:
                  <span className={styles.resalt}>
                    {detVideogame.platforms?.map((platform, index) => (
                      <p key={index}>{platform}</p>
                    ))}
                  </span>
                </div>
              </div>
            </div>
            <p className={styles.subtitle}>
              Fecha de Presentación:{" "}
              <span className={styles.resalt}>{detVideogame.released}</span>
            </p>
            <div className={styles.modifyCont}>
              <p className={styles.subtitle}>
                Puntuación:{" "}
                <span className={styles.resalt}>{detVideogame.rating}</span>
              </p>
              {detVideogame.createInDb && (
                <button className={styles.modifyBtn} onClick={handleOpenModal}>
                  <span className="material-symbols-outlined">edit</span>
                </button>
              )}
            </div>
          </div>
          <button className={styles.button} onClick={() => navigate("/home")}>
            X
          </button>
        </div>
      )}
      {isModalOpen && <ChangeRating onClose={handleCloseModal} id={id} />}
    </div>
  );
}
