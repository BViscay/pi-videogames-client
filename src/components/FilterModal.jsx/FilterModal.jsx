import styles from "./filterModal.module.css";

import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getFilterByName } from "../../redux/sliceFilters";

import GameCard from "../GameCard/GameCard";

export default function FilterModal({ onClose }) {
  const videogame = useSelector(getFilterByName);
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.modal}>
          <h2 className={styles.text}>Videogames Filtrados</h2>
          <div className={styles.cardsContainer}>
            {videogame.map((game) => (
              <GameCard
                key={game.id}
                gameId={game.id}
                image={game.image}
                name={game.name}
                genres={game.genres}
                onActionClick={() => navigate("/game-detail/" + game.id)}
              />
            ))}
          </div>
          <div>
            <button className={styles.button} onClick={onClose}>
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
