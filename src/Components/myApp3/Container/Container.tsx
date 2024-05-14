import { useState } from "react";
import { ContainerItems } from ".././ContainerItems/ContainerItems";
import styles from "./Container.module.css";
import { reviews } from ".././ContainerItems/ContainerItems.date";

function Container() {
  const [position, setPosition] = useState<number>(0);

  const actionPlus = () => {
    if (position === reviews.length - 1) {
      setPosition(0);
    } else setPosition((old) => old + 1);
  };

  const actionMinus = () => {
    if (position === 0) {
      setPosition(reviews.length - 1);
    } else setPosition((old) => old - 1);
  };

  const actionRandom = () => {
    setPosition(Math.floor(Math.random() * reviews.length));
  };

  return (
    <div className="App">
      <main>
        <section className={styles.container}>
          <div className={styles.title}>
            <h2>our reviews</h2>
            <div className={styles.underline}></div>
          </div>

          <article className={styles.review}>
            <ContainerItems position={position} />

            <div className={styles.buttonContainer}>
              <button className={styles.prevBtn} onClick={actionMinus}>
                <i className={"fas fa-chevron-left"}></i>
              </button>
              <button className={styles.nextBtn} onClick={actionPlus}>
                <i className={"fas fa-chevron-right"}></i>
              </button>
            </div>
            <button className={styles.randomBtn} onClick={actionRandom}>surprise me</button>
          </article>
        </section>
      </main>
    </div>
  );
}

export default Container;