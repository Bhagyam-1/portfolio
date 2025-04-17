import { useEffect, useState } from "react";
import { navigationElements as initialNavElements } from "../../utility/constants";
import LinkElement from "../common/LinkElement";
import { useLocation } from "react-router";

const HeaderNavigation = () => {
    const location = useLocation();
    const [navElements, setNavElements] = useState(initialNavElements);

    useEffect(() => {
        const updatedNavElements = navElements.map((element) => ({ ...element, active: location.hash === `#${element.linkTo}` }))
        setNavElements(updatedNavElements)
    }, [location.hash])

    return (
        <nav className="w-full flex justify-center">
            <ul className="w-fit flex justify-between mr-1 p-[5px] header-effect shadows
                    dark:text-dark-text">
                {
                    navElements.map((element) => {
                        return <LinkElement linkElement={element} key={element.id} />
                    })
                }
            </ul>
        </nav>
    )
}

export default HeaderNavigation;