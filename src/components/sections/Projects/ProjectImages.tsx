
import sketch from "../../../assets/sketch-draw.png";
import sketchMenu from "../../../assets/sketch-start.png";
import songHomepage from "../../../assets/homepage.png";
import songPlaylist from "../../../assets/playlist.png";
import chatCentric from "../../../assets/chat-centric.png";
import search from "../../../assets/search.png";
import userPlaylist from "../../../assets/myPlaylist.png";
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
            className="grid grid-cols-2 gap-4 h-fit w-[90vw] justify-center p-12"
            aria-labelledby={`project-images-${id}`}
        >
            <h4 id={`project-images-${id}`} className="sr-only">Screenshots of the project</h4>
            {imagesMap[id].map((image, index) => (
                <img key={index} src={image.src} alt={image.alt} className="h-auto object-cover" />
            ))}
        </motion.div>

    ) : null;
};

export default ProjectImage;