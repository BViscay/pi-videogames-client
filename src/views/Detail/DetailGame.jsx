import styles from "./DetailGame.module.css";
import { useParams } from "react-router-dom";

export default function DetailGame() {
  const { id } = useParams();
  console.log(id);
  return <div className={styles.container}>DetailGame</div>;
}
