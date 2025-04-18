import { motion } from 'framer-motion';

const Home = () => {
    return (
        <motion.section
            id="home"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="h-[100vh] w-[90vw]"
            aria-labelledby="home-header"
            aria-live="polite"
        >
            <div className="relative h-full">
                <div className="h-[100vh] flex flex-wrap items-center justify-center md:text-center px-4">
                    <h1 id="home-header" className="dark:text-dark-shadow font-bold m-0 text-2xl md:text-3xl lg:text-4xl">Hi there, I'm <span className="dark:text-pure-white">Bhagyam </span>
                        <br />
                        I craft <span className="dark:text-pure-white">dynamic and pixel-perfect interfaces</span>
                        <br />
                        that bring ideas to life.
                    </h1>
                </div>

                <div className="bg-noise-container">
                    <div className='flex flex-col justify-center h-full box-decoration-clone bg-noise'>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Home;
