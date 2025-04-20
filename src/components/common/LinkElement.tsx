import { NavigationElementI } from "../../models/Common.model";

interface LinkElementProps {
    linkElement: NavigationElementI;
    activeSection: string;
    setActiveSection: React.Dispatch<React.SetStateAction<string>>
}

const LinkElement = ({ linkElement, activeSection, setActiveSection }: LinkElementProps) => {
    const linkIcon = linkElement.name;

    let baseClasses = 'rounded-[40px] ease-in-out font-semibold text-md px-4 py-2';
    const activeClass = 'transition-colors duration-700 ease-in-out text-pure-white font-bold bg-radial from-dark-radial-initial to-dark-radial-finish shadow-[0_10px_30px_2px_#393939d4]';


    return (
        <li
            className={`${baseClasses} ${activeSection === linkElement.linkTo ? activeClass : ''}`}>
            <a href={`#${linkElement.linkTo}`}
                onClick={() => { setActiveSection(linkElement.linkTo) }}
            >
                {linkIcon}
            </a>
        </li>
    );
}

export default LinkElement;