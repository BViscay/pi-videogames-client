import styles from "./FiltersBar.module.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import { getGenres } from "../../redux/sliceGenres";
import useFilterData from "../../hooks/useFilterData";
import { getFiltersData } from "../../redux/sliceFilters";

export default function GenreSelect({ handleSideBar }) {
  const allGenres = useSelector(getGenres);
  const [selectedGenre, setSelectedGenre] = useState("Generos");
  const { filterByGenre } = useFilterData();
  const filterData = useSelector(getFiltersData);

  const handleGenreChange = (event) => {
    const selectedGenre = event.target.value;
    setSelectedGenre(selectedGenre);
    filterByGenre(selectedGenre);
    setSelectedGenre("Generos");
    handleSideBar();
  };

  const isFilterActive = allGenres.filter((genre) =>
    filterData.includes(genre)
  );

  return (
    <div>
      <select
        className={
          isFilterActive.length > 0 ? styles.selectActive : styles.select
        }
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
      {isFilterActive.length > 0 ? (
        <p className={styles.paragraph}>
          Estas Filtrando por:{" "}
          <span className={styles.list}>{isFilterActive.join(", ")}</span>
        </p>
      ) : (
        <p></p>
      )}
    </div>
  );
}
