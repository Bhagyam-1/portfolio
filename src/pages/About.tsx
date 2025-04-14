import AboutRightSection from '../components/sections/About/AboutRightSection';

export default function About() {
    return (
        <section id="about" className="relative pb-8 pt-16 h-fit w-full" aria-labelledby="about-header">
            <h2 id="about-header" className="sr-only">About Me</h2>
            <div className="absolute h-full w-full opacity-20 pointer-events-none text-center z-[1]">
                <div className="h-full bg-noise"></div>
            </div>
            <AboutRightSection />
        </section>
    );
}
