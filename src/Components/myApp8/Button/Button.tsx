import { FC } from "react";
import styles from "./Button.module.css";
import { IButtonProps } from "./Button.props";
export const Button: FC<IButtonProps> = ({ s, a }) => {
  return (
    <button type="button" className={styles.filterBtn} onClick={a}>
      {s}
    </button>
  );
};
