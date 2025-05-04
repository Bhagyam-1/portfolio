import Header from "./Header";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Projects from "../../pages/Projects";
import Work from "../../pages/Work";
import Contact from "../../pages/Contact";

const Layout = () => {

    return (
        <div className="w-screen h-screen dark:bg-dark-background flex flex-col">
            <Header />

            <main
                id="main-scroll-container"
                role="main"
                className="flex flex-col gap-16 items-center flex-grow text-light-text dark:text-dark-text overflow-y-auto overflow-x-hidden"
                tabIndex={0}
            >
                <Home />
                <About />
                <hr className="w-[96vw] dark:border-dark-shadow" />
                <Projects />
                <hr className="w-[96vw] dark:border-dark-shadow" />
                <Work />
                <Contact />
            </main>
        </div>
    );


};

export default Layout;
