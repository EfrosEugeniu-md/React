import { FC } from "react";
import { ITimeElement } from "./TimeElement.props";
import styles from "./TimeElement.module.css";
import cn from "classnames";

export const TimeElement: FC<ITimeElement> = ({ type, count, visibel }) => {
  return (
    <>
      <div className={cn(styles.deadlineFormat, { [styles.v]: !visibel })}>
        <div>
          <h4>{count}</h4>
          <span>{type}</span>
        </div>
      </div>
    </>
  );
};
//<ul className={`navbar--links ${isToggled ? 'navbar--show-links' : ''}`}>
//<NavbarLinks />
