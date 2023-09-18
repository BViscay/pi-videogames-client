import styles from "./Buttons.module.css";
import CreateGameButton from "./CreateGameButton";
import LoginButton from "./LoginButton";
import MyAccountButton from "./MyAccountButton";

export default function Buttons() {
  return (
    <div className={styles.buttonsContainer}>
      <div className="btn mx-5 join-item">
        <CreateGameButton />
      </div>
      <div className="btn mx-5 join-item">
        <LoginButton />
      </div>
      <div className="mx-5">
        <MyAccountButton />
      </div>
    </div>
  );
}
