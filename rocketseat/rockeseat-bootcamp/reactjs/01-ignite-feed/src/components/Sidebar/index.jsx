import styles from "./Sidebar.module.css";
import image from "../../assets/teste.png";
import {PencilLine} from '@phosphor-icons/react'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img src={image} />


      <div className={styles.profile}>

      <img className={styles.avatar} src="https://github.com/ofelipescherer.png" alt="Profile image" />

        <span>Felipe Scherer</span>
        <span>Developer</span>
      </div>

      <footer>
        <a href="">
          <PencilLine size={20} />
          Editar seu perfil</a>
      </footer>
    </aside>
  );
}
