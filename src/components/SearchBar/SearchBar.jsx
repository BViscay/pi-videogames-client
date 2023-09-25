import styles from "./SearchBar.module.css";
import { useState } from "react";
import { getRenderVideogames } from "../../redux/sliceFilters";
import { useSelector } from "react-redux";
import useModal from "../../hooks/useModal";
import FilterModal from "../FilterModal/FilterModal";

//eslint-disable-next-line
export default function SearchBar({ onSearch }) {
  const [name, setName] = useState("");
  const { isModalOpen, handleCloseModal, handleOpenModal } = useModal();

  const videogames = useSelector(getRenderVideogames);

  const filteredVideogames = Array.from(
    new Set(videogames.map((vg) => vg.name))
  ).map((name) => videogames.find((vgName) => vgName.name === name));

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    onSearch(name);
    handleOpenModal();
    setName("");
  };

  return (
    <div className={styles.container}>
      <div className={styles.searchBar}>
        <input
          type="search"
          onChange={handleChange}
          value={name}
          list={name.length >= 3 ? "name" : null}
          placeholder="Busca el juego por su nombre"
          className={styles.searchBarInput}
        />

        {filteredVideogames.length ? (
          <datalist id="name">
            {filteredVideogames.map((videogame, index) => (
              <option
                key={index}
                value={videogame.name}
                style={{
                  backgroundColor: "transparent",
                  color: "#fff",
                  WebkitAppearance: "none",
                  MozAppearance: "none",
                  appearance: "none",
                }}
              />
            ))}
          </datalist>
        ) : null}
        <button onClick={handleSearch} className={styles.searchButton}>
          <span className={`material-symbols-outlined ${styles.button}`}>
            search
          </span>
        </button>
      </div>
      {isModalOpen && <FilterModal onClose={handleCloseModal} />}
    </div>
  );
}
