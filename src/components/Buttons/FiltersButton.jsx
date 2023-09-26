import styles from "./Buttons.module.css";

import { useSelector } from "react-redux";
import { getFiltersData } from "../../redux/sliceFilters";

export default function FiltersButton({ handleSideBar }) {
  const isFilterActive = useSelector(getFiltersData);

  return (
    <button
      onClick={handleSideBar}
      className={isFilterActive.length > 0 ? styles.activeBtn : styles.button}
    >
      Filtros
    </button>
  );
}
