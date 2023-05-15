import styles from "./Sidebar.module.css";
import image from "../../assets/teste.png";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img src={image} />
      <div className={styles.profile}>
        <span>Felipe Scherer</span>
        <span>Developer</span>
      </div>

      <footer>
        <a href="">Editar seu perfil</a>
      </footer>
    </aside>
  );
}
