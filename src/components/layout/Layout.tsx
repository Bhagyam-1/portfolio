import Header from "./Header";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Projects from "../../pages/Projects";
import { motion } from "framer-motion";
import Work from "../../pages/Work";
import Contact from "../../pages/Contact";

const Layout = () => {

    return (
        <div className="w-screen h-screen bg-black flex flex-col">
            <Header />

            <motion.main
                id="scroll-container"
                role="main"
                className="flex flex-col items-center flex-grow text-light-text dark:text-dark-text overflow-y-auto overflow-x-hidden"
                tabIndex={0}
            >
                <Home />
                <About />
                <Projects />
                <Work />
                <Contact />
            </motion.main>
        </div>
    );


};

export default Layout;
