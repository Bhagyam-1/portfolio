import { ReactNode } from "react";
import { CardInfoI } from "./Common.model";

export interface LayoutProps {
    children: ReactNode;
}

export interface AnimatedLineProps {
    elements: CardInfoI[];
    classes: string;
}

interface ClipboardIconPropInfoI {
    link: PropLinkInfoI;
    className: string;
}
interface PropLinkInfoI {
    href: string,
    name: string 
}

export interface CopyToClipboardIconsPropsI {
    icon: React.ReactElement,
    iconInfo: ClipboardIconPropInfoI;
}