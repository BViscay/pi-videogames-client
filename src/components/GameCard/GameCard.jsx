import styles from "./GameCard.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function GameCard({ gameId, image, name, genres }) {
  const [isClicked, setIsClicked] = useState(false);

  const handleCardClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <Link to={`/videogames/${gameId}`}>
      <div onClick={handleCardClick} className={styles.container}>
        <div className={styles.image}>
          <div className={styles.image}>
            <img src={image} alt="card-image" className={styles.image} />
          </div>
        </div>

        <div className={styles.textCont}>
          <h1 className={styles.name}>{name}</h1>
          <h3 className={styles.genres}>Generos:</h3>
          <div className={styles.genreContainer}>
            {genres.map((genre, index) => (
              <ul key={index} className={styles.genre}>
                {genre}
              </ul>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
