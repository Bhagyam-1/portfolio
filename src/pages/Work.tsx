import WorkExperiencesList from "../components/sections/Work/WorkExperiencesList";

const Work = () => {
    return (
        <section id="work" aria-labelledby="work-header" className="flex flex-col gap-16 w-full px-8 md:px-16">
            <h2 className="text-3xl heading-font">A Glimpse into My Professional Evolution</h2>
            <WorkExperiencesList />
        </section>
    )
}

export default Work;