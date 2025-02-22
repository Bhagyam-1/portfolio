import { MoonIcon } from "@heroicons/react/24/outline";
import { SunIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import HeaderNavigation from "./HeaderNavigation";

const Header = () => {
    const [isDarkMode, setIsDarkMode] = useState(true);

    const toggleDarkMode = () => {
        const htmlElement = document.documentElement;
        isDarkMode ? htmlElement.classList.remove('dark') : htmlElement.classList.add('dark');
        setIsDarkMode(isCurrentDarkMode => !isCurrentDarkMode);
    }

    return (
        <header className="w-full flex justify-around items-center flex-shrink-0 p-5 text-light-secondary-alt dark:text-dark-secondary-alt animate-dropDown">
            <HeaderNavigation />

            <button type="button" className="p-1 flex items-center justify-center rounded-full border border-light-secondary-alt dark:border-dark-secondary-alt 
            cursor-pointer hover:scale-125 hover:text-light-text dark:hover:text-dark-text" aria-label="Toggle dark mode" onClick={toggleDarkMode}>
                {isDarkMode ? <SunIcon className="size-4" /> : <MoonIcon className="size-4" />}
            </button>
        </header>
    )
}

export default Header;