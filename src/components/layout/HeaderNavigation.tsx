import { useState } from "react";
import { navigationElements as initialNavElements } from "../../utility/constants";
import LinkElement from "../common/LinkElement";
import useSectionTracker from "../../custom-hooks/useSectionTracker";

const HeaderNavigation = () => {
    const [navElements, _setNavElements] = useState(initialNavElements);
    const [activeSection, setActiveSection] = useState("");
    useSectionTracker(activeSection, setActiveSection);

    return (
        <nav className="w-full flex justify-center">
            <ul className="w-fit flex justify-between mr-1 p-[5px] header-effect shadows
                    dark:text-dark-text">
                {
                    navElements.map((element) => {
                        return <LinkElement linkElement={element} key={element.id} activeSection={activeSection} setActiveSection={setActiveSection} />
                    })
                }
            </ul>
        </nav>
    )
}

export default HeaderNavigation;