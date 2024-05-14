import { FC } from "react";
import { IArticleProps } from "./Article.props";
import styles from './Article.module.css'
export const Article: FC<IArticleProps> = ({ curentPosition,text }): JSX.Element => {
  return (
    <>
      <article className={styles.question}>
        <div className={styles.questionrText}>
          <p>{text}</p>
          <button type="button" className={styles.questionBtn}>
            <span className={styles.plusIcon}>
              <i className={"far fa-plus-square"}></i>
            </span>
            <span className={styles.minusIcon}>
              <i className={"far fa-minus-square"}></i>
            </span>
          </button>
        </div>
        <div className={styles.questiornText}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est dolore
            illo dolores quia nemo doloribus quaerat, magni numquam repellat
            reprehenderit.
          </p>
        </div>
      </article>
    </>
  );
};
