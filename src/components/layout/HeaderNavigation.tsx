import { useEffect } from "react";
import { navigationElements } from "../../utility/constants";
import LinkElement from "../common/LinkElement";
import { useLocation } from "react-router";
import { HomeIcon } from "@heroicons/react/24/outline";
import { UserIcon } from "@heroicons/react/24/outline";
import { FolderIcon } from "@heroicons/react/24/outline";

const getLinkIcon = (linkElementName: string) => {
    switch (linkElementName) {
        case 'Home':
            return <HomeIcon className="size-5" />
        case 'About':
            return <UserIcon className="size-5" />
        case 'Projects':
            return <FolderIcon className="size-5" />
        default:
            return null;
    }
}

const HeaderNavigation = () => {
    const location = useLocation();

    useEffect(() => {
        const currentRouteElement = navigationElements.find((element) => location.pathname === element.linkTo) || navigationElements[0]
        currentRouteElement.active = true;
    }, [location.pathname])

    return (
        <nav className="w-full flex justify-center">
            <ul className="w-fit flex gap-8 justify-center rounded-full bg-light-background-alt 
            dark:border-dark-background-alt dark:bg-dark-background-alt dark:border-dark-primary px-8 py-2">
                {
                    navigationElements.map((element) => {
                        element.icon = getLinkIcon(element.name);
                        return <LinkElement linkElement={element} key={element.id} />
                    })
                }
            </ul>
        </nav>
    )
}

export default HeaderNavigation;