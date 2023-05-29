import styles from "./Comment.module.css";
import { Trash, ThumbsUp } from "@phosphor-icons/react";

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/ofelipescherer.png" alt=""></img>
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Felipe Scherer</strong>
              <time
                title="11 de Maio às 08:13hrs"
                dateTime="2022-05-11 08:13:30"
              >
                Cerca de 1h atrás
              </time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24}></Trash>
            </button>
          </header>
          <p>Muito bom, parabéns</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />3 Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
