
import sketch from "../../../assets/sketch-draw.webp";
import sketchMenu from "../../../assets/sketch-start.webp";
import songHomepage from "../../../assets/homepage.webp";
import songPlaylist from "../../../assets/playlist.webp";
import chatCentric from "../../../assets/chat-centric.webp";
import search from "../../../assets/search.webp";
import userPlaylist from "../../../assets/myPlaylist.webp";
import { motion } from "framer-motion";

const ProjectImage = ({ id }: { id: string }) => {
    const imagesMap: Record<string, { src: string; alt: string }[]> = {
        doodle: [
            { src: sketchMenu, alt: "Sketch app start screen" },
            { src: sketch, alt: "Sketch app drawing canvas" },
            { src: chatCentric, alt: "Sketch app chat feature" }
        ],
        musicPlayer: [
            { src: songHomepage, alt: "Music player homepage" },
            { src: songPlaylist, alt: "Music player playlist view" },
            { src: search, alt: "Music player search functionality" },
            { src: userPlaylist, alt: "User-created playlist" }
        ],
    };

    return imagesMap[id] ? (

        <motion.div
            initial={{ rotateX: 85, scale: 0.2 }}
            whileInView={{ rotateX: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="grid md:grid-cols-2 gap-4 h-fit w-[90vw] justify-center p-12"
            aria-labelledby={`project-images-${id}`}
        >
            <h4 id={`project-images-${id}`} className="sr-only">Screenshots of the project</h4>
            {imagesMap[id].map((image, index) => (
                <img
                    key={index}
                    src={image.src}
                    alt={image.alt}
                    className="h-auto object-cover"
                    loading="lazy"
                    decoding="async"
                    width="400"
                    height="190.5"
                />
            ))}
        </motion.div>

    ) : null;
};

export default ProjectImage;