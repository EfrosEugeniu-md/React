import { IContainerItems } from "./ContainerItems.props";
import { FC, Fragment } from "react";
import { reviews } from "./ContainerItems.date";
import styles from "./ContainerItems.module.css";

export const ContainerItems: FC<IContainerItems> = ({ position }): JSX.Element => {
  return (
    <Fragment>
      <div className={styles.imgContainer}>
        <img src={reviews[position].img} alt="" className={styles.personImg} />
      </div>
      <h4 className={styles.author}>{reviews[position].name}</h4>
      <p className={styles.job}>{reviews[position].job}</p>
      <p className={styles.info}>{reviews[position].text}</p>
    </Fragment>
  );
};
