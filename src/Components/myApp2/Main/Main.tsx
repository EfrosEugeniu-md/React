
import { IMainProps } from "./Main.props";
import styles from "./Main.module.css";
import { useState } from "react";

import { Cart } from "../Cart/Cart";
import { IButtonProps } from "../Button/Button/Button.props";
import { Button } from "../Button/Button/Button";

export const Main = (props: IMainProps) => {
  const [count, setCount] = useState<number>(5);

  const buttons: IButtonProps[] = [
    { capition: "decrese", action: () => setCount((old) => old - 1) },
    { capition: "reset", action: () => setCount(0) },
    { capition: "increse", action: () => setCount((old) => old + 1) },
  ];

  const buildButtons = (buttons: IButtonProps[]) => {
    return buttons.map((item: IButtonProps) => (
      <Button key={item.capition.toString()} {...item} />
    ));
  };

  return (
    <main>
      <div className={styles.container}>
        <h1>Counter</h1>
        <Cart count={count} />

        <div className={styles.buttonConainer}>
          {buttons.length > 0 && buildButtons(buttons)}
        </div>
      </div>
    </main>
  );
};

//export default Main;
