import styles from "./Buttons.module.css";
import { useNavigate } from "react-router-dom";

export default function ReturnButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/home");
  };

  return (
    <div>
      <button onClick={handleClick} className={styles.button}>
        <span>Volver</span>
      </button>
    </div>
  );
}
