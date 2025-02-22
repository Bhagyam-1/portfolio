import LinkElement from '../components/common/LinkElement';
import { exploreMyWork } from '../utility/constants';
import SocialIcons from '../components/sections/Home/SocialIcons';
import HomePageHeader from '../components/sections/Home/HomePageHeader';


const Home = () => {
    return (
        <section className="flex flex-col items-center justify-center text-center gap-4">
            <HomePageHeader />

            <figure className='mb-2'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwtKe5LBNVlgXTS8xL_3FEdvuAOFWIB6LOBw&s' alt='Portrait of me' className='w-full rounded-full' />
            </figure>

            <section>
                <LinkElement linkElement={exploreMyWork} />
            </section>

            <nav className="flex gap-4 items-center" aria-label="Social Links">
                <SocialIcons />
            </nav>
        </section>
    );
};

export default Home;