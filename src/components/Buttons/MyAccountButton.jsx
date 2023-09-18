import styles from "./Buttons.module.css";
import { useNavigate } from "react-router-dom";

export default function MyAccountButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/home");
  };

  return <button onClick={handleClick} className={styles.button}>Bot3</button>;
}
