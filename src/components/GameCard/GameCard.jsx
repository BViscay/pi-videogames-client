import styles from "./GameCard.module.css";
import { Link } from "react-router-dom";

export default function GameCard({ gameId, image, name, genres, rating }) {
  return (
    <Link to={`/videogames/${gameId}`}>
      <div className={styles.container}>
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
          <p className={styles.rating}>Rating: {rating}</p>
        </div>
      </div>
    </Link>
  );
}
