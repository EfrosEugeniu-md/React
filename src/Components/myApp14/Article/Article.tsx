import { FC } from "react";
import styles from "./Article.module.css";
import { IArticle } from "./Article.props";

export const Article: FC<IArticle> = ({ id,title,ed,del }): JSX.Element => {
  return (
    <article  className={styles.groceryItem}>
      <p className={styles.title}>{title}</p>
      <div className={styles.btnContainer}>
        <button type="button" className={styles.editBtn} onClick={()=>ed(id)}>
          <i className={"fas fa-edit"}></i>
        </button>
        <button type="button" className={styles.deleteBtn} onClick={()=>del(id)}>
          <i className={"fas fa-trash"}></i>
        </button>
      </div>
    </article>
  );
};
