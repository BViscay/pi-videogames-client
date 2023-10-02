import styles from "./Buttons.module.css";
import CreateGameButton from "./CreateGameButton";
import FiltersButton from "./FiltersButton";
import { useLocation } from "react-router-dom";
import ReturnButton from "./ReturnButton";
import AboutButton from "./AboutButton";

export default function Buttons({ handleSideBar, isFilterBarOpen }) {
  const location = useLocation();

  const isHomePage = location.pathname === "/home";
  const isNewGamePage = location.pathname === "/new-game";

  return (
    <div className={styles.buttonsContainer}>
      <AboutButton />
      {isHomePage && (
        <div>
          <CreateGameButton
            handleSideBar={handleSideBar}
            isFilterBarOpen={isFilterBarOpen}
          />
        </div>
      )}

      {isNewGamePage && (
        <div>
          <ReturnButton />
        </div>
      )}

      {isHomePage && (
        <div>
          <FiltersButton handleSideBar={handleSideBar} />
        </div>
      )}
    </div>
  );
}
