import styles from "./Buttons.module.css";
import CreateGameButton from "./CreateGameButton";
import GenreSelect from "./GenreSelect";
import FiltersButton from "./FiltersButton";

export default function Buttons({ handleSideBar }) {
  return (
    <div className={styles.buttonsContainer}>
      <div className="btn mx-5 join-item">
        <CreateGameButton />
      </div>
      <div className="btn mx-5 join-item">
        <GenreSelect />
      </div>
      <div className="mx-5">
        <FiltersButton handleSideBar={handleSideBar} />
      </div>
    </div>
  );
}
