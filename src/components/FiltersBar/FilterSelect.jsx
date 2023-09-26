import styles from "./FiltersBar.module.css";

export default function FilterSelect({
  selectName,
  firstOpt,
  handleSideBar,
  filterBy,
  OptionOne,
  OptionTwo,
  OptionTree,
}) {
  const handleChange = (event) => {
    const selectedOrder = event.target.value;
    filterBy(selectedOrder);
    handleSideBar();
  };

  return (
    <select className={styles.select} name={selectName} onChange={handleChange}>
      <option value={OptionOne}>{firstOpt}</option>
      <option value={OptionTwo}>{OptionTwo}</option>
      <option value={OptionTree}>{OptionTree}</option>
    </select>
  );
}
