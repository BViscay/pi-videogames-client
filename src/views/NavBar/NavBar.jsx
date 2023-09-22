import styles from "./NavBar.module.css";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import useData from "../../hooks/useData";

import SearchBar from "../../components/SearchBar/SearchBar";
import Buttons from "../../components/Buttons/Buttons";
import FiltersBar from "../../components/FiltersBar/FiltersBar";

export default function NavBar() {
  const { onSearch } = useData();
  const navigate = useNavigate();
  const [isFilterBarOpen, setIsFilterBarOpen] = useState(false);

  const useToHome = () => {
    navigate("/home");
  };

  const handleSideBar = () => {
    setIsFilterBarOpen(!isFilterBarOpen);
  };

  return (
    <div className={styles.navBar}>
      <div className={styles.navBarCont}>
        <img src={logo} className={styles.navBarLogo} onClick={useToHome} />

        <div className={styles.searchBar}>
          <SearchBar onSearch={onSearch} />
        </div>

        <Buttons handleSideBar={handleSideBar} />
      </div>
      {isFilterBarOpen && <FiltersBar handleSideBar={handleSideBar} />}
    </div>
  );
}
