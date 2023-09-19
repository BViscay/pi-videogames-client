import styles from "./NewGame.module.css";

export default function NewGame() {
  return (
    <div>
      <div className={styles.container}>
        <form className={styles.form}>
          <h2 className={styles.title}>CREA TU VIDEOGAME</h2>
          <p className={styles.paragraph} type="Nombre:">
            <input
              className={styles.input}
              placeholder="Nombre del videogame"
            ></input>
          </p>
          <p className={styles.paragraph} type="Descripción">
            <input
              className={styles.input}
              placeholder="Breve descipción del videogame."
            ></input>
          </p>
          <p className={styles.paragraph} type="Lanzamiento:">
            <input
              className={styles.input}
              placeholder="Fecha de lanzamiento"
            ></input>
          </p>
          <p className={styles.paragraph} type="Calificación:">
            <input
              className={styles.input}
              placeholder="Fecha de lanzamiento"
            ></input>
          </p>
          <button className={styles.button}>CREAR</button>
        </form>
      </div>
    </div>
  );
}
