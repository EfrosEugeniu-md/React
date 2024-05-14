import styles from "./Article.module.css";
import { IArticleProps } from "./Article.props";
import f from "./images/item-1.jpeg"
import { FC } from "react";

export const Article: FC<IArticleProps> = ({title,price,img,desc}) => {
  return (
    <article className={styles.menuItem}>
      <img src={img} alt="menu item" className={styles.photo} />
      <div className={styles.itemInfo}>
        <header>
          <h4>{title}</h4>
          <h4 className={styles.price}>{price}</h4>
        </header>
        <p className={styles.itemText}>{desc}</p>
      </div>
    </article>
  );
};
