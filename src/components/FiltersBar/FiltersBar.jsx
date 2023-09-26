import useFilterData from "../../hooks/useFilterData";

import FilterSelect from "./FilterSelect";
import styles from "./FiltersBar.module.css";
import GenreSelect from "./GenreSelect";

import ResetFilters from "./ResetFilters";

export default function FiltersBar({ handleSideBar }) {
  const { filterByOrigin, filterByFirstLetter, filterByRating } =
    useFilterData();

  return (
    <div className={styles.container}>
      <GenreSelect handleSideBar={handleSideBar} />
      <FilterSelect
        handleSideBar={handleSideBar}
        filterBy={filterByFirstLetter}
        selectName={"abecedaryOrder"}
        firstOpt={"Abecedario"}
        OptionOne={"Order"}
        OptionTwo={"A-Z"}
        OptionTree={"Z-A"}
      />
      <FilterSelect
        handleSideBar={handleSideBar}
        filterBy={filterByOrigin}
        selectName={"originOrder"}
        firstOpt={"Origen"}
        OptionOne={"Order"}
        OptionTwo={"BDD"}
        OptionTree={"API"}
      />
      <FilterSelect
        handleSideBar={handleSideBar}
        filterBy={filterByRating}
        selectName={"ratingOrder"}
        firstOpt={"Rating"}
        OptionOne={"Order"}
        OptionTwo={"Mayor"}
        OptionTree={"Menor"}
      />

      <ResetFilters handleSideBar={handleSideBar} />

      <div></div>
    </div>
  );
}
