import { useEffect } from "react";
import styles from "./Home.module.css";
import useData from "../../hooks/useData";

import Cards from "../../components/Cards/Cards";

export default function Home() {
  const { fetchVideogamesData, genresData } = useData();

  useEffect(() => {
    fetchVideogamesData();
    genresData();
    //eslint-disable-next-line
  }, []);

  return (
    <div className={styles.cont}>
      <Cards />
    </div>
  );
}
