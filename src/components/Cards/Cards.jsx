import styles from "./Cards.module.css";
import { useNavigate } from "react-router-dom";
import useFilterData from "../../hooks/useFilterData";
import usePagination from "../../hooks/usePagination";

import GameCard from "../GameCard/GameCard";

export default function Cards() {
  const navigate = useNavigate();
  const { renderVideogames } = useFilterData();

  const { currentCards, nextPage, prevPage, hasPreviousPage, hasNextPage } =
    usePagination(renderVideogames);

  const activateSpinner = renderVideogames.length;

  return (
    <div className={styles.container}>
      {activateSpinner ? (
        <div className={styles.container}>
          <div className={styles.container}>
            <div className={styles.cardsContainer}>
              {renderVideogames.length &&
                currentCards.map((game) => (
                  <GameCard
                    key={game.id}
                    gameId={game.id}
                    image={game.image}
                    name={game.name}
                    genres={game.genres}
                    rating={game.rating}
                    onActionClick={() => navigate("/game-detail/" + game.id)}
                  />
                ))}
            </div>
          </div>

          <div className={styles.buttonContainer}>
            {hasPreviousPage && (
              <div onClick={prevPage}>
                <span className={`material-symbols-outlined ${styles.button}`}>
                  arrow_back_ios
                </span>
              </div>
            )}
            {hasNextPage && (
              <div onClick={nextPage} className={styles.rightButton}>
                <span className={`material-symbols-outlined ${styles.rbutton}`}>
                  arrow_forward_ios
                </span>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className={styles.spinnerContainer}>
          <div className={styles.spinner}></div>
        </div>
      )}
    </div>
  );
}
