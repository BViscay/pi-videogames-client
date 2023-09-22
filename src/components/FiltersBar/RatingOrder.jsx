import styles from "./FiltersBar.module.css";
import { useState } from "react";

import useFilterData from "../../hooks/useFilterData";

export default function RatingOrderSelect({ handleSideBar }) {
  const [selectedOrder, setSelectedOrder] = useState("Ranking");
  const { filterByRating } = useFilterData();

  const handleRankingChange = (event) => {
    const selectedOrder = event.target.value;
    setSelectedOrder(selectedOrder);
    filterByRating(selectedOrder);
    handleSideBar();
  };

  return (
    <select
      className={styles.select}
      name="abecedaryOrder"
      onChange={handleRankingChange}
      value={selectedOrder}
    >
      <option value="ranking">Rating</option>
      <option value="Mayor">Mayor</option>
      <option value="Menor">Menor</option>
    </select>
  );
}
