import styles from "./Buttons.module.css";

export default function FiltersButton({ handleSideBar }) {
  return (
    <button onClick={handleSideBar} className={styles.button}>
      Filtros
    </button>
  );
}
