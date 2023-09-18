import styles from "./Cards.module.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import { getVideogames } from "../../redux/sliceVideogames";
import { useNavigate } from "react-router-dom";

import GameCard from "../GameCard/GameCard";

export default function Cards() {
  const navigate = useNavigate();
  const videogames = useSelector(getVideogames);

  const [currentSlide, setCurrentSlide] = useState(0);

  const activateSpinner = videogames.length;
  const itemsPerPage = 15;
  const totalSlides = Math.ceil(videogames.length / itemsPerPage);
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
              {videogames.length &&
                videogames
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
                      onActionClick={() => navigate("/game-detail/" + game.id)}
                    />
                  ))}
            </div>
          </div>

          <div className="absolute -top-16 right-8">
            <button
              onClick={handlePrevSlide}
              className={`${styles.button} ${
                isFirstPage ? styles.disabled : ""
              }`}
              disabled={isFirstPage}
            >
              Anterior
            </button>
            <button
              onClick={handleNextSlide}
              className={`${styles.button} ${
                isLastPage ? styles.disabled : ""
              }`}
              disabled={isLastPage}
            >
              Siguiente
            </button>
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
