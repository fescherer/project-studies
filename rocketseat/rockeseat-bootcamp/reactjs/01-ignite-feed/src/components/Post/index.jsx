import { Avatar } from "../Avatar";
import { Comment } from "../Comment";
import styles from "./Post.module.css";

export function Post({author, publishedAt, content}) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            src={author.avatarURL}
            alt="Profile image"
            className={styles.avatar}
          />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time title="11 de maio as 13hrs" dateTime="2022-05-11 09:13:00">
          Criado em {`${publishedAt.getDay()}-${publishedAt.getMonth()}-${publishedAt.getFullYear()} `} às {`${publishedAt.getHours()}hrs${publishedAt.getMinutes()}`}
        </time>
      </header>

      
        {
          content.map(item => (
            <>
              <div className={styles.content}>
                {item.type === 'paragraph' && <p>{item.content}</p>}
                {item.type === 'link' && <a href="">{item.content}</a>}
              </div>
            </>
          ))

        }

      <form className={styles.commentForm}>
        <strong>Deixe seu comentário</strong>

        <textarea placeholder="Deixe um comentário"></textarea>

        <footer>
          <button type="submit">Comentar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
