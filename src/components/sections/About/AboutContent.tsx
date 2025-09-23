import TechIcons from "./TechIcons";

const AboutContent = () => {
    return (
        <section
            aria-labelledby="about-content" className="flex">
            <h3 id="about-values" className="sr-only">My Approach & Vision</h3>
            <div className="w-full">
                <p className="text-4xl text-zinc-400 font-bold border-b-2 border-dark-grey pb-2">Skills</p>
                <TechIcons />
            </div>
        </section>
    )
}

export default AboutContent;