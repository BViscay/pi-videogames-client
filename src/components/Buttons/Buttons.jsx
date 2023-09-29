import styles from "./Buttons.module.css";
import CreateGameButton from "./CreateGameButton";
import FiltersButton from "./FiltersButton";
import { useLocation } from "react-router-dom";

export default function Buttons({ handleSideBar, isFilterBarOpen }) {
  const location = useLocation();

  const isHomePage = location.pathname === "/home";

  return (
    <div className={styles.buttonsContainer}>
      <div>
        <CreateGameButton
          handleSideBar={handleSideBar}
          isFilterBarOpen={isFilterBarOpen}
        />
      </div>

      {isHomePage && (
        <div>
          <FiltersButton handleSideBar={handleSideBar} />
        </div>
      )}
    </div>
  );
}
