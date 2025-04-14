import AboutDescription from "./AboutDescription";
import AboutContent from "./AboutContent";

const AboutRightSection = () => {
    return (
        <div
            className="h-fit p-2"
        >
            <div className="flex flex-col gap-16">
                <AboutDescription />
                <AboutContent />
            </div>
        </div>
    )
}

export default AboutRightSection;