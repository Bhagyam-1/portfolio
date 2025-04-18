export enum LinkVariant {
    NavButton = 'navButton'
}

export interface NavigationElementI {
    id?: number,
    linkTo: string,
    name: string,
    variant: LinkVariant
}

export interface SocialIconLinkI {
    href: string;
    icon: string | React.ReactElement,
    name: string;
    className?: string;
}

export interface SocialIconInfoI {
    href: string;
    name: string;
}

export interface CardInfoI {
    id: string;
    header: string;
    list: string | string[];
}

export interface ExperienceInfoI extends Pick<CardInfoI, 'id' | 'header'> {
    list: ListInfoI;
}

export interface ListInfoI {
    position: string;
    timeLine: string;
    workInfo: string[];
}