import { ReactNode } from "react";

export interface IButtonProps {
    children? : ReactNode,
    capition : String,
    action : () => void;
}