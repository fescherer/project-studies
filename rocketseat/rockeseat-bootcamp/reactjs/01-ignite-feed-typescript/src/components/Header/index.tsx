import styles from "./Header.module.css";
import igniteLogo from "../../assets/logo.svg";

export function Header() {
  return (
    <div className={styles.header}>
      <img src={igniteLogo} alt="Logo" />
      <strong className={styles.Header}>Ignite Feed</strong>
    </div>
  );
}
