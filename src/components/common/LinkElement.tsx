import { NavigationElementI } from "../../models/Common.model";

interface LinkElementProps {
    linkElement: NavigationElementI;
}

const LinkElement = ({ linkElement }: LinkElementProps) => {
    const linkIcon = linkElement.name;

    let baseClasses = 'rounded-[40px] ease-in-out font-semibold text-md px-3 py-3';
    const activeClass = 'transition-colors duration-700 ease-in-out text-pure-white font-bold bg-radial from-dark-radial-initial to-dark-radial-finish shadow-[0_10px_30px_2px_#393939d4]';


    return (
        <a href={`#${linkElement.linkTo}`} className={`${baseClasses} ${linkElement.active ? activeClass : ''}`} >{linkIcon}</a>
    );
}

export default LinkElement;