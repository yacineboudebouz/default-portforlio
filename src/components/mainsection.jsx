import React from 'react'
import { motion } from 'framer-motion'
import { textVariant, slideIn } from '../utils/motion'
import { SectionWrapper } from '../hoc'
import { nigga } from '../assets'
import { links } from '../constants'
const MainSection = () => {
    return (
        <div className=" w-full sm:h-screen h-full  flex sm:flex-row flex-col-reverse sm:justify-between pb-8 sm:items-center sm:mt-0 mt-16">
            <dvi className="">
                <motion.h1 variants={textVariant()} className=' text-white font-bold sm:text-[50px] text-[30px] sm:pt-0 pt-24'>Hi i am ni##a </motion.h1>
                <motion.p className=' max-w-2xl my-8'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla explicabo est provident, odit dolorum quae saepe voluptatum
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores corrupti maxime nihil suscipit quapam harum esse facere, rem expedita dicta quidem, fugiat tempora inventore laboriosam voluptatem aliquam incidunt! Non, ullam.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel fugit consequuntur hic sequi ducimus s
                </motion.p>
                <motion.div variants={slideIn('left')} className=' flex   items-center'>
                    <div className='  h-[10px] w-[10px] rounded-full bg-red-800' />
                    <p className=' pl-3'>Ni##a Rock, Nigeria</p>

                </motion.div>
                <motion.div variants={slideIn('left')} className=' flex  items-center'>
                    <div className='  h-[10px] w-[10px] rounded-full bg-green-700' />
                    <p className=' pl-3'>I am ready for $ex</p>
                </motion.div>
                <motion.div variants={slideIn('left')} className=' flex  items-center justify-between max-w-[100px] pt-3'>
                    {links.map((link, index) => {
                        return (
                            <a href={link.link}
                                target="_blank"
                                rel="noopener noreferrer">
                                <img src={link.icon} />
                            </a>
                        )
                    })}
                </motion.div>
            </dvi>
            <div className=' relative h-[300px] w-[300px]  bg-cover'>

                <div className=' absolute top-[30px] left-[30px]  h-[300px] w-[300px] bg-secondBgColor'></div>
                <img src={nigga} className=' absolute w-full h-full cover-fill   border-firstBgColor border-4' />

            </div>

        </div>
    )
}

export default SectionWrapper(MainSection, "")