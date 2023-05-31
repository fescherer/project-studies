import styles from "./Sidebar.module.css";
import image from "../../assets/teste.png";
import { PencilLine } from "@phosphor-icons/react";
import { Avatar } from "../Avatar";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img src={image} className={styles.bgImage} />

      <div className={styles.profile}>
        <Avatar src="https://github.com/ofelipescherer.png" />

        <span>Felipe Scherer</span>
        <span>Developer</span>
      </div>

      <footer>
        <a href="">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
