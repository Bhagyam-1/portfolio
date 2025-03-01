import { useEffect, useState } from "react";
import { navigationElements as initialNavElements } from "../../utility/constants";
import LinkElement from "../common/LinkElement";
import { useLocation } from "react-router";
import { CiFolderOn, CiUser } from "react-icons/ci";
import { HiOutlineHome } from "react-icons/hi2";

const getLinkIcon = (linkElementName: string) => {
    switch (linkElementName) {
        case 'Home':
            return <HiOutlineHome className="size-6" />
        case 'About':
            return <CiUser className="size-6" />
        case 'Projects':
            return <CiFolderOn className="size-6" />
        default:
            return null;
    }
}

const HeaderNavigation = () => {
    const location = useLocation();
    const [navElements, setNavElements] = useState(initialNavElements);

    useEffect(() => {
        const updatedNavElements = navElements.map((element) => ({ ...element, active: location.pathname === element.linkTo }))
        setNavElements(updatedNavElements)
    }, [location.pathname])

    return (
        <nav className="w-full flex justify-center">
            <ul className="xs:w-[clamp(15rem,50vw,20rem)] w-[11rem] flex justify-around mr-1 rounded-full bg-light-background-lightgrey shadow-[0px_0px_2px_0px_var(--color-light-shadow)] dark:shadow-[0px_0px_2px_0px_var(--color-dark-shadow)]
            dark:bg-dark-glass-color dark:border-dark-primary dark:text-dark-shadow px-8 py-3">
                {
                    navElements.map((element) => {
                        element.icon = getLinkIcon(element.name);
                        return <LinkElement linkElement={element} key={element.id} />
                    })
                }
            </ul>
        </nav>
    )
}

export default HeaderNavigation;