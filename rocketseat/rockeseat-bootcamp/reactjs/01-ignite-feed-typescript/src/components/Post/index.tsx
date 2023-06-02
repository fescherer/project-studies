import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import { Avatar } from "../Avatar";
import { Comment } from "../Comment";
import styles from "./Post.module.css";
import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

type Author = {
  name: string,
  role: string,
  avatarURL: string
}

type Content = {
  type: 'paragraph' | 'link'
  content: string
}

type PostProps = {
  author: Author,
  publishedAt: Date,
  content: Content[]
}

export function Post({ author, publishedAt, content }: PostProps) {
  const [comments, setComments] = useState<string[]>([]);
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

  function handleNewCommentSubmit(event: FormEvent) {
    event.preventDefault();

    setComments((prev) => [...prev, newComment]);
    setNewComment("");
  }

  function handleCommentText(event: ChangeEvent<HTMLTextAreaElement>) {
    setNewComment(event.target.value);
    event.target.setCustomValidity("");
  }

  function deleteComment(comment: string) {
    const newCommentsList = comments.filter((item) => item !== comment);
    setComments(newCommentsList);
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("Esse campo é obrigatório");
    // console.log(event);
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar
            src={author.avatarURL}
            alt="Profile image"
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
          onChange={handleCommentText}
          placeholder="Deixe um comentário"
          required
          onInvalid={handleNewCommentInvalid}
        ></textarea>

        <footer>
          <button type="submit" disabled={newComment.length === 0}>
            Comentar
          </button>
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
