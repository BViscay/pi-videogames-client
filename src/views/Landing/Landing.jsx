import styles from "../Landing/Landing.module.css";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();
  return (
    <div className={styles.bgImageContainer}>
      <div>
        <p className={styles.text}>READY TO PLAY?</p>
        <button onClick={() => navigate("/home")} className={styles.button}>
          INSERT COIN
        </button>
      </div>
    </div>
  );
}
