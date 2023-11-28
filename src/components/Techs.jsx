import React from "react"
import { SectionWrapper } from "../hoc"
import { slideIn, textVariant, fadeIn } from "../utils/motion"
import { motion } from 'framer-motion'
import { techs } from "../constants"


const TechCard = ({ tech }) => {
    return (
        <div className=" flex flex-col items-center justify-between  h-28 w-28 ">
            <div className="  h-24 w-24">
                <img src={tech.icon} className=" cover-fill" />
            </div>
            <p>{tech.name}</p>
        </div>
    )
}

const Techs = () => {



    return (
        <div className=" flex flex-col justify-center w-full   pb-4 pt-6">
            <div className=" flex justify-center w-full pb-8 ">
                <motion.div variants={slideIn('left')} className=" bg-secondBgColor py-2 px-6 rounded-[20px] block ">Techs</motion.div>

            </div>
            <div className=" flex justify-center w-full pb-8 ">
                <motion.p variants={textVariant(0)} className="  ">Thats all i know bit$h</motion.p>

            </div>
            <div className=" flex flex-row  gap-4 flex-wrap items-center justify-center">{
                techs.map((tech, index) => {
                    return (
                        <motion.div variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}>
                            <TechCard tech={tech} ></TechCard>
                        </motion.div>

                    )
                })
            }
            </div>
        </div>
    )
}

export default SectionWrapper(Techs, "")