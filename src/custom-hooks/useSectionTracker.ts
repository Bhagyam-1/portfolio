import { useEffect } from "react";

const useSectionTracker = (activeSection: string, setActiveSection: React.Dispatch<React.SetStateAction<string>>) => {
    useEffect(() => {
        const callbackFn = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if(entry.isIntersecting) {
                    console.log(entry.target.id);
                    if(activeSection !== entry.target.id)
                        setActiveSection(entry.target.id);
                }
            })
        }

        const mainContainer = document.getElementById("main-scroll-container");
        const options = {
            root: mainContainer,
            threshold: 0.2
        }

        const observer = new IntersectionObserver(callbackFn, options)

        const allSectionsId = ["home", "about", "projects", "work"];
        const sections = allSectionsId.map((sectionId) => document.getElementById(sectionId));

        sections.forEach((section) => {
            if(section instanceof HTMLElement)
                observer.observe(section)
        });

        return () => {
            sections.forEach(section => {
                if(section instanceof HTMLElement)
                    observer.unobserve(section)
            });
        }
    }, [setActiveSection])
}

export default useSectionTracker;