import AboutCards from '../components/sections/About/AboutCards';
import AboutDescription from '../components/sections/About/AboutDescription';
import AboutHeader from '../components/sections/About/AboutHeader';

export default function About() {
    return (
        <section className="rounded-xl text-light-text dark:text-dark-text p-8 flex flex-col items-center gap-6">
            <AboutHeader />
            <AboutDescription />
            <AboutCards />
        </section>
    );
}
