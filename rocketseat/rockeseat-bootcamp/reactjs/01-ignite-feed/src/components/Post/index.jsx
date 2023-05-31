import { useState } from "react";
import { Avatar } from "../Avatar";
import { Comment } from "../Comment";
import styles from "./Post.module.css";
import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

export function Post({ author, publishedAt, content }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const publishedDateFormated = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'hrs'",
    { locale: ptBR }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  // new Intl.DateTimeFormat("pt-BR", {
  //   day: "2-digit",
  //   month: "long",
  //   hour: "2-digit",
  //   minute: "2-digit",
  // }).format(publishedAt);

  function handleNewCommentSubmit(event) {
    event.preventDefault();

    setComments((prev) => [...prev, newComment]);
    setNewComment("");
  }

  function deleteComment(comment) {
    const newCommentsList = comments.filter((item) => item !== comment);
    setComments(newCommentsList);
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar
            src={author.avatarURL}
            alt="Profile image"
            className={styles.avatar}
          />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time
          title={publishedDateFormated}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      {content.map((item, index) => (
        <div className={styles.content} key={index}>
          {item.type === "paragraph" && <p>{item.content}</p>}
          {item.type === "link" && <a href="">{item.content}</a>}
        </div>
      ))}

      <form onSubmit={handleNewCommentSubmit} className={styles.commentForm}>
        <strong>Deixe seu comentário</strong>

        <textarea
          name="comment"
          value={newComment}
          onChange={(event) => setNewComment(event.target.value)}
          placeholder="Deixe um comentário"
        ></textarea>

        <footer>
          <button type="submit">Comentar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((item, index) => (
          <Comment content={item} key={index} onDeleteComment={deleteComment} />
        ))}
      </div>
    </article>
  );
}
