import { FC } from "react";
import styles from "./Cart.module.css";
import { ICartProps } from "./Cart.props";
import cn from "classnames";
export const Cart: FC<ICartProps> = ({ count }) => {
  return (
    <span
      className={cn(styles.value, {
        [styles.red]: count < 0,
        [styles.green]: count >= 0,
      })}
    >
      {" "}
      {count}{" "}
    </span>
  );
};
