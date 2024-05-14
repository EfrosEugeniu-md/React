import { useEffect, useState } from "react";
import { TimeElement } from "../TimeElement/TimeElement";
import { ITimeElement } from "../TimeElement/TimeElement.props";
import { ITimer, months, weekdays } from "./TimeArticle.props";
import styles from "./TimeArticle.module.css";

export const TimeArticle = () => {
  const curentInitTime: Date = new Date();

  const featureTime: Date = new Date(curentInitTime.getTime() + 11111);

  const [timer, setTimer] = useState<ITimer>(
    initTimer(featureTime.getTime() - curentInitTime.getTime())
  );
  const timeElements: ITimeElement[] = [
    { type: "day", count: timer.days, visibel: timer.relevant },
    { type: "hours", count: timer.hours, visibel: timer.relevant },
    { type: "mins", count: timer.mins, visibel: timer.relevant },
    { type: "secs", count: timer.secs, visibel: timer.relevant },
  ];
  useEffect(() => {
    setInterval(() => {
      setTimer(initTimer(featureTime.getTime() - new Date().getTime()));
    }, 1000);
  }, []);

  return (
    <article className={styles.giftInfo}>
      <h3>old iphone giveaway</h3>
      <h4 className={styles.giveaway}>{initCurentTime(featureTime)} </h4>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit
        molestiae cum libero atque ut voluptate qui consectetur aliquid incidunt
        voluptatem quos, dolore, non commodi quaerat aliquam eligendi, quisquam
        totam blanditiis.
      </p>

      <div className={styles.deadline}>
        {timeElements.length > 0 && times(timeElements)}
      </div>
    </article>
  );
};

const times = (b: ITimeElement[]) => {
  return b.map((a: ITimeElement) => (
    <TimeElement
      key={a.type}
      type={a.type}
      count={a.count}
      visibel={a.visibel}
    ></TimeElement>
  ));
};

function initTimer(t: number): ITimer {
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  let days = Math.floor(t / oneDay);
  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);

  return {
    days: days,
    hours: hours,
    mins: minutes,
    secs: seconds,
    relevant: t > 0,
  };
}

function initCurentTime(futureDate: Date): string {
  const year = futureDate.getFullYear();
  const hours = futureDate.getHours();
  const minutes = futureDate.getMinutes();

  const month = months[futureDate.getMonth()];
  const weekday = weekdays[futureDate.getDay()];
  const date = futureDate.getDate();
  return `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}am`;
}
