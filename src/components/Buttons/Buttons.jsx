import styles from "./Buttons.module.css";
import CreateGameButton from "./CreateGameButton";
import FiltersButton from "./FiltersButton";

export default function Buttons({ handleSideBar }) {
  return (
    <div className={styles.buttonsContainer}>
      <div>
        <CreateGameButton />
      </div>

      <div>
        <FiltersButton handleSideBar={handleSideBar} />
      </div>
    </div>
  );
}
