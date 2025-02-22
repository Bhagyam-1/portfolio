export enum LinkVariant {
    Nav = 'nav',
    Button = 'button'
}

export interface NavigationElementI {
    id?: number,
    linkTo: string,
    name: string,
    active: boolean,
    variant: LinkVariant,
    icon?: null | React.ReactElement;
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