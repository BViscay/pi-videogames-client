import styles from "./FiltersBar.module.css";
import NameSelect from "./NameSelect";
import OriginSelect from "./OriginSelect";
import RatingOrder from "./RatingOrder";

export default function FiltersBar({ handleSideBar }) {
  return (
    <div className={styles.container}>
      <NameSelect handleSideBar={handleSideBar} />
      <RatingOrder handleSideBar={handleSideBar} />
      <OriginSelect handleSideBar={handleSideBar} />
    </div>
  );
}
