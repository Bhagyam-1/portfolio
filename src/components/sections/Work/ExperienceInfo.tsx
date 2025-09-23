import { motion } from "framer-motion";
import { ExperienceInfoI } from "../../../models/Common.model";

export interface ExperienceInfoProps {
    experienceInfo: ExperienceInfoI;
}

const ExperienceInfo = ({ experienceInfo }: ExperienceInfoProps) => {
    return (
        <motion.div
            className="flex flex-col md:flex-row gap-8 justify-between w-full pb-12"
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0 }}
        >
            <h3 id={`experience-header-${experienceInfo.list.position}`} className="text-2xl font-semibold text-dark-text heading-font">
                {experienceInfo.header}
            </h3>

            <div className="flex flex-col items-self-start gap-2 text-md text-zinc-400">
                <h4 className="text-xl text-dark-text font-medium">{experienceInfo.list.position}</h4>
                <p>{experienceInfo.list.timeLine}</p>
                <ul className="flex flex-wrap md:max-w-[50vw] mx-w-full gap-2 pt-4 pl-4">
                    {experienceInfo.list.workInfo.map((workDone, index) => (
                        <li key={index} className="list-disc">{workDone}</li>
                    ))}
                </ul>
            </div>
        </motion.div>
    );
};

export default ExperienceInfo;
