import { Link, NavLink } from "react-router";
import { LinkVariant, NavigationElementI } from "../../models/Common.model";

interface LinkElementProps {
    linkElement: NavigationElementI;
}

const getNavElement = (element: NavigationElementI, linkIcon: string | React.ReactElement) => {
    let baseClasses = 'transition-all duration-300 ease-in-out';

    if (element.variant === 'button') {
        const lightClasses = 'bg-light-secondary-alt hover:bg-light-secondary text-light-text-alt hover:text-light-background';
        const darkClasses = 'dark:hover:bg-dark-secondary text-dark-text-alt dark:hover:text-dark-background';
        baseClasses += ` block px-8 py-3 ${lightClasses} ${darkClasses} rounded-full text-lg`;

        return (
            <Link to={element.linkTo} className={baseClasses}>
                {linkIcon}
            </Link>
        );
    } else {
        return (
            <NavLink to={element.linkTo} className={({ isActive }) => `${baseClasses} ${isActive && element.variant ? 'text-light-primary dark:text-dark-primary' : ''}`}>
                {linkIcon}
            </NavLink>
        );
    }
}

const LinkElement = ({ linkElement }: LinkElementProps) => {
    const linkIcon = linkElement.icon || linkElement.name;
    const navElement = getNavElement(linkElement, linkIcon);

    return (
        linkElement.variant === LinkVariant.Nav ? (
            <li className="hover:animate-bounce hover:scale-125 hover:text-light-text dark:hover:text-dark-text font-semibold text-base">
                {navElement}
            </li>
        ) : (
            navElement
        )
    );
}

export default LinkElement;