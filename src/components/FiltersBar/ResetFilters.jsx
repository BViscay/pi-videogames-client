import styles from "./FiltersBar.module.css";
import useFilterData from "../../hooks/useFilterData";

export default function ResetFilters({ handleSideBar }) {
  const { resetFilters } = useFilterData();

  const handleClick = () => {
    resetFilters();
    handleSideBar();
  };

  return (
    <button onClick={handleClick} className={styles.button}>
      Reset Filters
    </button>
  );
}
