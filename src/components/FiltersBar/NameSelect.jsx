import styles from "./FiltersBar.module.css";
import { useState } from "react";

import useFilterData from "../../hooks/useFilterData";

export default function LetterOrderSelect({ handleSideBar }) {
  const [selectedOrder, setSelectedOrder] = useState("Generos");
  const { filterByFirstLetter } = useFilterData();

  const handleOrderChange = (event) => {
    const selectedOrder = event.target.value;
    setSelectedOrder(selectedOrder);
    filterByFirstLetter(selectedOrder);
    handleSideBar();
  };

  return (
    <select
      className={styles.select}
      name="abecedaryOrder"
      onChange={handleOrderChange}
      value={selectedOrder}
    >
      <option value="Order">Alfabetico</option>
      <option value="A-Z">A-Z</option>
      <option value="Z-A">Z-A</option>
    </select>
  );
}
