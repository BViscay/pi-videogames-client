import styles from "../Landing/Landing.module.css";
import { useNavigate } from "react-router-dom";
import useData from "../../hooks/useData";

export default function Landing() {
  const { fetchVideogamesData, genresData } = useData();

  const handleClick = () => {
    fetchVideogamesData();
    genresData();
    navigate("/home");
  };

  const navigate = useNavigate();
  return (
    <div className={styles.bgImageContainer}>
      <div>
        <p className={styles.text}>READY TO PLAY?</p>
        <button onClick={handleClick} className={styles.button}>
          INSERT COIN
        </button>
      </div>
    </div>
  );
}
