import { ReactNode } from "react";
import { CardInfoI } from "./Common.model";

export interface LayoutProps {
    children: ReactNode;
}

export interface AnimatedLineProps {
    elements: CardInfoI[];
    classes: string;
}