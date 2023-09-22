import styles from "./Buttons.module.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import { getGenres } from "../../redux/sliceGenres";
import useFilterData from "../../hooks/useFilterData";

export default function GenreSelect() {
  const allGenres = useSelector(getGenres);
  const [selectedGenre, setSelectedGenre] = useState("Generos");
  const { filterByGenre } = useFilterData();

  const handleGenreChange = (event) => {
    const selectedGenre = event.target.value;
    setSelectedGenre(selectedGenre);
    filterByGenre(selectedGenre);
  };

  return (
    <select
      className={styles.select}
      name="genres"
      id=""
      onChange={handleGenreChange}
      value={selectedGenre}
    >
      <option value="Generos">Generos</option>
      {allGenres.map((genre, index) => (
        <option key={index} value={genre}>
          {genre}
        </option>
      ))}
    </select>
  );
}
