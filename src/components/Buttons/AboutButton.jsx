import styles from "./Buttons.module.css";

import useModal from "../../hooks/useModal";
import About from "../About/About";

export default function AboutButton() {
  const { isModalOpen, handleCloseModal, handleOpenModal } = useModal();

  return (
    <div>
      <button onClick={handleOpenModal} className={styles.button}>
        About
      </button>

      {isModalOpen && <About onClose={handleCloseModal} />}
    </div>
  );
}
