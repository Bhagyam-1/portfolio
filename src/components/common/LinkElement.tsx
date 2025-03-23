import { Link } from 'react-scroll';
import { NavigationElementI } from "../../models/Common.model";
import { ReactNode } from 'react';

interface LinkElementProps {
    linkElement: NavigationElementI;
}

const getNavElement = (element: NavigationElementI, linkIcon: string | ReactNode) => {
    let baseClasses = 'rounded-[40px] ease-in-out font-semibold text-md px-3 py-3';
    const activeClass = 'transition-colors duration-700 ease-in-out text-pure-white font-bold bg-radial from-dark-radial-initial to-dark-radial-finish shadow-[0_10px_30px_2px_#393939d4]';

    return (
        <Link
            to={element.linkTo}
            containerId="scroll-container"
            spy={true}
            smooth={true}
            duration={500}
            isDynamic={true}
            offset={-400}
            className={baseClasses}
            activeClass={activeClass}
            aria-label={element.name}
        >
            {linkIcon}
        </Link>
    );
}

const LinkElement = ({ linkElement }: LinkElementProps) => {
    const linkIcon = linkElement.name;
    const navElement = getNavElement(linkElement, linkIcon);

    return (
        navElement
    );
}

export default LinkElement;