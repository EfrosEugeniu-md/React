import { TimeArticle } from "../TimeArticle/TimeArticle";
import img from "./gift.jpeg";
import styles from "./TimeContainer.module.css";

export const TimeContainer = () => {
  return (
    <div >
      <section className={styles.sectionCenter}>
        <article className={styles.giftImg}>
          <img src={img} alt="gift" />
        </article>
        <TimeArticle />
      </section>
    </div>
  );
};

