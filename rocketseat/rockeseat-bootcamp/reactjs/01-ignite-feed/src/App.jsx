import { useState } from "react";
import reactLogo from "./assets/react.svg";
import styles from "./app.module.css";

import "./global.css";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header></Header>
      <div className={styles.wrapper}>
        <Sidebar />
        <main><Post></Post></main>
      </div>
    </div>
  );
}

export default App;
