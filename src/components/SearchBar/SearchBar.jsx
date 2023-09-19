import styles from "./SearchBar.module.css";
import { useState } from "react";
import { getVideogames } from "../../redux/sliceVideogames";
import { useSelector } from "react-redux";
import { BiSearchAlt } from "react-icons/bi";
import useModal from "../../hooks/useModal";
import FilterModal from "../FilterModal.jsx/FilterModal";

//eslint-disable-next-line
export default function SearchBar({ onSearch }) {
  const [name, setName] = useState("");
  const { isModalOpen, handleCloseModal, handleOpenModal } = useModal();

  const videogames = useSelector(getVideogames);

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
          <BiSearchAlt />
        </button>
      </div>
      {isModalOpen && <FilterModal onClose={handleCloseModal} />}
    </div>
  );
}
