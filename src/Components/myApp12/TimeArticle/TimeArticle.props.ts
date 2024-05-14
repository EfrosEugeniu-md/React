export interface ITimer {
  days: number;
  hours: number;
  mins: number;
  secs: number;
  relevant: boolean;
}

export interface ICurentTime {
  dayOfWeek: string;
  date: string;
  month: string;
  age: string;
  time: string;
}

export const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  export const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  