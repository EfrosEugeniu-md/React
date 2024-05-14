
import { IMainProps } from "./Main.props";
import styles from "./Main.module.css";
import { useSelector } from 'react-redux'
import { Cart } from "../Cart/Cart";
import { IButtonProps } from "../Button/Button/Button.props";
import { Button } from "../Button/Button/Button";
import { RootState, appDispatch, counterActions } from './../../../store/index'
export const Main = (props: IMainProps) => {
  

  const buttons: IButtonProps[] = [
    { capition: "decrese", action: () => appDispatch(counterActions.decrease()) },
    { capition: "reset", action: () => appDispatch(counterActions.reset()) },
    { capition: "increse", action: () => appDispatch(counterActions.increase()) },
  ];
  const counter = useSelector((state: RootState) => state.counter.value)

  const buildButtons = (buttons: IButtonProps[]) => {console.log(counterActions);

    return buttons.map((item: IButtonProps) => (
      <Button key={item.capition.toString()} {...item} />
    ));
  };

  return (
    <main>
      <div className={styles.container}>
        <h1>Counter</h1>
        <Cart count={counter} />

        <div className={styles.buttonConainer}>
          {buttons.length > 0 && buildButtons(buttons)}
        </div>
      </div>
    </main>
  );
};

//export default Main;
