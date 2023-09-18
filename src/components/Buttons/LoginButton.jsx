import styles from "./Buttons.module.css"
import { useNavigate } from "react-router-dom";

export default function LoginButton() {
  const navigate = useNavigate();

  // const handleClick = () => {
  //   login ? handleLogout() : navigate("/login");
  // };

  return (
    <button
      onClick={() => navigate("/home")}
      className={styles.button}
    >
      Hola
    </button>
  );
}
