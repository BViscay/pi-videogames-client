import styles from "./Cards.module.css";
import { useState } from "react";
import useFilterData from "../../hooks/useFilterData";
import { useNavigate } from "react-router-dom";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import GameCard from "../GameCard/GameCard";

export default function Cards() {
  const navigate = useNavigate();
  const { renderVideogames } = useFilterData();

  const [currentSlide, setCurrentSlide] = useState(0);

  const activateSpinner = renderVideogames.length;
  const itemsPerPage = 15;
  const totalSlides = Math.floor(renderVideogames.length / itemsPerPage);
  const isFirstPage = currentSlide === 0;
  const isLastPage = currentSlide === totalSlides - 1;

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    if (!isLastPage) {
      setCurrentSlide((prev) => prev + 1);
    }
  };

  return (
    <div className={styles.container}>
      {activateSpinner ? (
        <div className={styles.container}>
          <div className={styles.container}>
            <div className={styles.cardsContainer}>
              {renderVideogames.length &&
                renderVideogames
                  .slice(
                    currentSlide * itemsPerPage,
                    (currentSlide + 1) * itemsPerPage
                  )
                  .map((game) => (
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
            <div onClick={handlePrevSlide}>
              <FiChevronLeft
                className={`${styles.button} ${
                  isFirstPage ? styles.disabled : ""
                }`}
                disabled={isFirstPage}
              />
            </div>
            <div onClick={handleNextSlide}>
              <FiChevronRight
                className={`${styles.button} ${
                  isLastPage ? styles.disabled : ""
                }`}
                disabled={isLastPage}
              />
            </div>
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
