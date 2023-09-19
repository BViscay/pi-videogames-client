import styles from "./NavBar.module.css";
// import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { GiHamburgerMenu } from "react-icons/gi";
import SearchBar from "../../components/SearchBar/SearchBar";
import Buttons from "../../components/Buttons/Buttons";
import logo from "../../assets/logo.png";
import useData from "../../hooks/useData";

export default function NavBar() {
  const { onSearch } = useData();
  const navigate = useNavigate();
  // const [showButtons, setShowButtons] = useState(false);

  function useToHome() {
    navigate("/");
  }

  // function toggleButtons() {
  //   setShowButtons(!showButtons);
  // }

  return (
    <div className={styles.navBar}>
      <div className={styles.navBarCont}>
        <img src={logo} className={styles.navBarLogo} onClick={useToHome} />

        <div className={styles.searchBar}>
          <SearchBar onSearch={onSearch} />
        </div>
        {/* <button
          className="md:hidden text-3xl text-primary-800 absolute right-7 mt-20"
          onClick={toggleButtons}
        >
          <GiHamburgerMenu />
        </button>
      </div>
      <div
        className={`${
          showButtons ? "flex" : "hidden"
        } md:flex items-center mt-5`}
      > */}
        <Buttons />
      </div>
    </div>
  );
}
