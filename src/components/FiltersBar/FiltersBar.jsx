import styles from "./FiltersBar.module.css";
import GenreSelect from "./GenreSelect";
import NameSelect from "./NameSelect";
import OriginSelect from "./OriginSelect";
import RatingOrder from "./RatingOrder";
import ResetFilters from "./ResetFilters";

export default function FiltersBar({ handleSideBar }) {
  return (
    <div className={styles.container}>
      <GenreSelect handleSideBar={handleSideBar} />
      <NameSelect handleSideBar={handleSideBar} />
      <RatingOrder handleSideBar={handleSideBar} />
      <OriginSelect handleSideBar={handleSideBar} />
      <ResetFilters handleSideBar={handleSideBar} />
    </div>
  );
}
