import Header from "./Header";
import Home from "../../pages/Home";
import { motion } from "framer-motion";
import React from "react";

const About = React.lazy(() => import("../../pages/About"));
const Projects = React.lazy(() => import("../../pages/Projects"));
const Work = React.lazy(() => import("../../pages/Work"));
const Contact = React.lazy(() => import("../../pages/Contact"));

const Layout = () => {

    return (
        <div className="w-screen h-screen dark:bg-dark-background flex flex-col">
            <Header />

            <motion.main
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
            </motion.main>
        </div>
    );


};

export default Layout;
