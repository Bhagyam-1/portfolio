import SocialIcons from "../components/common/SocialIcons";
import Resume from "../components/sections/About/Resume";

const Contact = () => {
    return (
        <footer
            id="contact"
            className="relative w-[100vw] pb-12"
            aria-labelledby="contact-header"
        >
            <div className="flex flex-col items-center justify-center gap-14 p-8 pt-16">
                <h2 id="contact-header" className="self-start w-full pb-16 pl-4 text-2xl text-dark-text-alt heading-font">
                    Let's craft a better future, <span className="text-dark-text">together.</span>
                </h2>
                <hr className="w-full dark:border-dark-shadow" />
                <div className="flex flex-col-reverse gap-4 md:flex-row items-center justify-between w-full text-sm px-4">
                    <span>&#169; {new Date().getFullYear()} All rights reserved</span>
                    <div role="group" className="flex">
                        <Resume />
                        <SocialIcons />
                    </div>
                </div>
            </div>
            <div className="absolute h-full w-full top-0 opacity-20 pointer-events-none text-center z-[1]">
                <div className="h-full bg-noise"></div>
            </div>
        </footer>
    )
}

export default Contact;