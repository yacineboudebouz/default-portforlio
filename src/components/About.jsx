import { SectionWrapper } from "../hoc"
import { motion } from 'framer-motion'
import { textVariant, slideIn } from "../utils/motion"
const About = () => {
    return (
        <div>
            <motion.h1 variants={textVariant()}>About</motion.h1>
        </div>
    )
}

export default SectionWrapper(About, "about")