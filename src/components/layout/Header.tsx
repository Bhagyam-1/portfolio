import HeaderNavigation from "./HeaderNavigation";

const Header = () => {

    return (
        <header className="w-full fixed flex justify-around items-center flex-shrink-0 p-5 dark:text-dark-secondary-alt z-10">
            <HeaderNavigation />
        </header>
    )
}

export default Header;