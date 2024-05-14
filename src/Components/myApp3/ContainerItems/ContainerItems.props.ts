import { ReactNode } from "react";

export interface IContainerDate {
  id: number;
  name: String;
  job: String;
  img: string;
  text: String;
}

export interface IContainerItems {
  children?: ReactNode;
  position: number;
}
