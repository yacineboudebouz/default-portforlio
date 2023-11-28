import { SectionWrapper } from "../hoc"
import { motion } from 'framer-motion'
import { textVariant, slideIn } from "../utils/motion"
import { nigga } from '../assets'
const About = () => {
    return (
        <div className=" flex flex-col justify-center w-full   pb-4 pt-6">
            <div className=" flex justify-center w-full pb-8">
                <motion.div variants={slideIn('left')} className=" bg-secondBgColor py-2 px-6 rounded-[20px] inline-block ">About</motion.div>
            </div>
            <div className=" sm:flex-row flex flex-col justify-between items-center">
                <div className=' relative h-[300px] w-[300px]  bg-cover '>
                    <div className=' absolute top-[30px] right-[30px]  h-[300px] w-[300px] bg-secondBgColor'></div>
                    <img src={nigga} className=' absolute w-full h-full cover-fill   border-firstBgColor border-4' />
                </div>
                <div className=" text-start">
                    <motion.p variants={textVariant()} className="max-w-2xl my-8 font-bold text-[30px]">Want to know me bit$h ?</motion.p>
                    <motion.p variants={textVariant()} className="max-w-2xl my-8 ">Want to know me bit$h ? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, sapiente beatae repellat porro culpa facilis ullam illum in necessitatibus adipisci numquam consectetur tempore delectus cumque laborum vitae itaque quia qui! Lorem, ipsum dolor sit amet consectetur adipisicing elit. A officia et earum omnis incidunt, quisquam neque consectetur magni sequi quidem vero, necessitatibus, sed suscipit reprehenderit fugit? Aut similique asperiores velit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste illum cumque aperiam qui quos sunt est, pariatur, odio totam, minima sapiente. Eaque nam dolorem et dolor deserunt delectus, repudiandae maxime.</motion.p>
                </div>
            </div>
        </div>
    )
}

export default SectionWrapper(About, "about")