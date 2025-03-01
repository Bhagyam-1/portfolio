import { RxDownload } from "react-icons/rx";

const Resume = () => {
    return (
        <>
            <a href="/resume"
                download="BhagyamResume.pdf"
                className="flex items-center gap-2 mt-8 px-8 py-2 text-light-tertiary dark:text-dark-tertiary bg-light-primary-alt 
                dark:bg-dark-secondary-alt dark:hover:text-dark-background dark:hover:bg-dark-secondary hover:text-light-background hover:bg-light-primary rounded-full"
            >
                <RxDownload />
                Resume
            </a>
        </>
    )
}

export default Resume;