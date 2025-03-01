import { motion } from "framer-motion";
import { AnimatedLineProps } from "../../models/ComponentProps.model";


const AnimatedLine = ({ elements, classes }: AnimatedLineProps) => {
    return (
        <div className={classes} aria-hidden="true">
            {
                elements.map((element, index: number) =>
                    <div key={element.id} className="w-4 flex grow items-center">
                        <motion.div
                            key={element.header}
                            className="absolute h-4 w-4 rounded-full dark:bg-dark-tertiary bg-light-secondary-alt"
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 + index * 0.5, duration: 1 }}
                        />
                    </div>
                )
            }
        </div>
    )
}

export default AnimatedLine;