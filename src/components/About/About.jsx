import styles from "./About.module.css";
import logo from "../../assets/logo.png";
import me from "../../assets/me.jpg";
import vite from "../../assets/Vite.png";
import react from "../../assets/React.png";
import node from "../../assets/Node.png";
import fl from "../../assets/Fl0.png";
import vercel from "../../assets/Vercel.png";
import linkedin from "../../assets/linkedin.png";
import github from "../../assets/github.png";

export default function About({ onClose }) {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.modal}>
          <div className={styles.titleCont}>
            <h1 className={styles.title}>ABOUT</h1>
          </div>
          <div className={styles.infoContainer}>
            <div className={styles.imgContainer}>
              <img src={logo} alt="videogame-image" className={styles.img} />
            </div>
            <div className={styles.dataContainer}>
              <h2 className={styles.name}> Explore Games</h2>
              <div className={styles.descriptionContainer}>
                <p className={styles.resalt}>
                  Es una Single Page Application realizada íntegramente con
                  Node.JS.
                  <br />
                  El Backend fue desarrollado con Express utilizando Bases de
                  Datos de PostgreSQL.
                  <br />
                  Respecto al Frontend, está construido con React.JS y maquetado
                  con CSS puro sin uso de librerías (por consigna).
                  <br />
                  Las tecnologías usadas para el deploy son: Fl0 para el backend
                  y la base de datos y Vercel para el frontend.
                </p>
              </div>

              <div className={styles.subtitle}>
                <img src={node} alt="Node.js" />
                <img src={vite} alt="Vite" />
                <img src={react} alt="React" />
                <img src={fl} alt="Fl0" />
                <img src={vercel} alt="Vercel" />
              </div>
            </div>
          </div>
          <div className={styles.meContainer}>
            <div className={styles.imgMeContainer}>
              <img src={me} alt="me-image" className={styles.meImg} />
            </div>
            <div className={styles.dataMeContainer}>
              <h2 className={styles.myname}> Bruno Viscay</h2>
              <div className={styles.descriptionMeContainer}>
                <p className={styles.mesubtitle}>Full Stack Developer</p>
                <div className={styles.sub}>
                  <a
                    href="https://www.linkedin.com/in/bruno-viscay/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={linkedin} alt="linkedin" />
                  </a>
                  <a
                    href="https://github.com/BViscay"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={github} alt="github" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <button className={styles.button} onClick={onClose}>
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}
