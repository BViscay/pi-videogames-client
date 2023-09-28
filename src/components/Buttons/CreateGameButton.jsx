import styles from "./Buttons.module.css";
import { useNavigate } from "react-router-dom";

export default function CreateGameButton({ handleSideBar }) {
  const navigate = useNavigate();

  const handleClick = () => {
    handleSideBar();
    navigate("/new-game");
  };

  return (
    <div>
      <button onClick={handleClick} className={styles.button}>
        <span>New Game</span>
      </button>
    </div>
  );
}
