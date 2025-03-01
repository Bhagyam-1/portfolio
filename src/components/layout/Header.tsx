import { useEffect, useState } from "react";
import HeaderNavigation from "./HeaderNavigation";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const Header = () => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        return localStorage.getItem('theme') === 'Dark';
    });

    useEffect(() => {
        const htmlElement = document.documentElement;

        if (isDarkMode) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }

        htmlElement.classList.toggle('dark', isDarkMode);
    }, [isDarkMode])

    const toggleDarkMode = () => {
        setIsDarkMode(isDarkMode => !isDarkMode);
    }

    return (
        <header className="w-full flex justify-around items-center flex-shrink-0 p-5 text-light-secondary-alt dark:text-dark-secondary-alt">
            <HeaderNavigation />

            <button type="button" className="p-1 flex items-center justify-center rounded-full border border-light-secondary-alt dark:border-dark-secondary-alt 
                cursor-pointer hover:scale-125"
                aria-label="Toggle dark mode"
                onClick={toggleDarkMode}
            >
                {
                    isDarkMode ?
                        <MdLightMode className="size-5 text-yellow-200 hover:text-yellow-300" /> :
                        <MdDarkMode className="size-5 text-light-text-alt hover:text-light-text" />
                }
            </button>
        </header>
    )
}

export default Header;