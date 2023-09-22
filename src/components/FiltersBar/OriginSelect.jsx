import styles from "./FiltersBar.module.css";
import { useState } from "react";

import useFilterData from "../../hooks/useFilterData";

export default function OriginSelect({ handleSideBar }) {
  const [selectedOrder, setSelectedOrder] = useState("Todos");
  const { filterByOrigin } = useFilterData();

  const handleOrderChange = (event) => {
    const selectedOrder = event.target.value;
    setSelectedOrder(selectedOrder);
    filterByOrigin(selectedOrder);
    handleSideBar();
  };

  return (
    <select
      className={styles.select}
      name="abecedaryOrder"
      onChange={handleOrderChange}
      value={selectedOrder}
    >
      <option value="Order">Origen</option>
      <option value="BDD">BDD</option>
      <option value="API">API</option>
    </select>
  );
}
