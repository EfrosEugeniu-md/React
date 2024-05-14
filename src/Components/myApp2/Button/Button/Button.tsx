import { IButtonProps } from "./Button.props";
import styles from "./Button.module.css";
import { FC } from "react";

export const Button: FC<IButtonProps> = ({ capition, action }): JSX.Element => {
  return (
    <button className={styles.btn} onClick={action}>
      {capition}
    </button>
  );
};
