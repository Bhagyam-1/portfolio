import { experiences } from "../../../utility/constants";
import AnimatedLine from "../../animations/AnimatedLine";
import ExperienceInfo from "./ExperienceInfo";

const WorkExperiencesList = () => {
    return (
        <div className="flex flex-col h-full gap-4 py-3 w-full">
            {
                experiences.map((experience) =>
                    <article
                        key={experience.id}
                        className="flex gap-12"
                        aria-labelledby={`experience-header-${experience.list.position}`}
                    >
                        <AnimatedLine />
                        <ExperienceInfo experienceInfo={experience} />
                    </article>
                )
            }
        </div>
    )
}

export default WorkExperiencesList;