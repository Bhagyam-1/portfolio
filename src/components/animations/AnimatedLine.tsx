import { motion } from "framer-motion";


const AnimatedLine = () => {
    return (
        <div aria-hidden="true" className="w-4 flex flex-col items-center gap-4 h-full pt-[11px] md:pt-[14px]">
            <motion.div
                className="h-3 w-3 rounded-full"
                initial={{ backgroundColor: "#545453" }}
                whileInView={{ backgroundColor: "#ffffff", boxShadow: "0 0 25px 0 white" }}
                transition={{ delay: 0.6, duration: 0.7 }}
            />
            <div className="grow w-[4px] bg-dark-background-alt"></div>
        </div>
    )
}

export default AnimatedLine;
