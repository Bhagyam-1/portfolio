import AboutCards from '../components/sections/About/AboutCards';
import AboutDescription from '../components/sections/About/AboutDescription';
import AboutHeader from '../components/sections/About/AboutHeader';
import Resume from '../components/sections/About/Resume';

export default function About() {
    return (
        <section className="p-8 flex flex-col items-center gap-6" aria-labelledby="about-header">
            <AboutHeader />
            <AboutDescription />
            <AboutCards />
            <Resume />
        </section>
    );
}
