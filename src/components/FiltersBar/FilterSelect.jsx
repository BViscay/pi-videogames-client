import styles from "./FiltersBar.module.css";
import { useSelector } from "react-redux";
import { getFiltersData } from "../../redux/sliceFilters";

export default function FilterSelect({
  handleSideBar,
  selectName,
  firstOpt,
  filterBy,
  OptionOne,
  OptionTwo,
  OptionTree,
}) {
  const filterData = useSelector(getFiltersData);

  const isFilterActive = filterData.some(
    (option) => option === OptionTwo || option === OptionTree
  );

  const handleChange = (event) => {
    const selectedOrder = event.target.value;
    filterBy(selectedOrder);
    handleSideBar();
  };

  return (
    <div>
      <select
        className={isFilterActive ? styles.selectActive : styles.select}
        name={selectName}
        onChange={handleChange}
      >
        <option value={OptionOne}>{firstOpt}</option>
        <option value={OptionTwo}>{OptionTwo}</option>
        <option value={OptionTree}>{OptionTree}</option>
      </select>

      {isFilterActive ? (
        <p className={styles.paragraph}>
          Estas Filtrando por:{" "}
          <span className={styles.list}>
            {filterData
              .filter((option) => option === OptionTwo || option === OptionTree)
              .join(", ")}
          </span>
        </p>
      ) : (
        <p></p>
      )}
    </div>
  );
}
