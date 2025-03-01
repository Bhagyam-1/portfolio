import LinkElement from '../components/common/LinkElement';
import { exploreMyWork } from '../utility/constants';
import SocialIcons from '../components/sections/Home/SocialIcons';
import HomePageHeader from '../components/sections/Home/HomePageHeader';
import { motion } from 'framer-motion';
import image from '../assets/image.webp'
const Home = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center justify-center text-center gap-4"
            aria-labelledby="home-header"
        >
            <HomePageHeader />

            <motion.figure
                initial={{ opacity: 0, y: 50, scale: 0.8, rotateZ: -20 }}
                animate={{ opacity: 1, y: 0, scale: 1, rotateZ: 0 }}
                transition={{ delay: 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="mb-2"
                aria-labelledby="profile-image"
            >
                <img
                    src={image}
                    alt="A Portrait of Bhagyam Pandey"
                    className="rounded-full h-50 w-50"
                    id="profile-image"
                    loading="lazy"
                />
            </motion.figure>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8, ease: 'easeOut' }}
            >
                <LinkElement linkElement={exploreMyWork} />
            </motion.div>

            <motion.nav
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9, duration: 0.8, ease: 'easeOut' }}
                className="flex gap-4 items-center"
                aria-label="Social Media Links"
            >
                <SocialIcons />
            </motion.nav>
        </motion.section>
    );
};

export default Home;
