import React from "react"
import { navLinks } from "../constants/index"
import { menu, close } from "../assets"
import { useState } from "react"

const AppBar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <div>
            <nav className="w-full  bg-firstBgColor fixed flex justify-between  z-50   top-0 py-7  sm:px-20 px-6 flex-row ">
                <div className=" text-white font-bold">
                    Nigga Portfolio
                </div>
                <div className=" sm:flex  sm:flex-row hidden ">
                    <ul
                        className=" list-none mx-2 flex sm:flex-row flex-col">
                        {navLinks.map((link, index) => (
                            <li>

                                <a href={`#${link.id}`} className=" text-white mx-2 font-bold hover:text-secondBgColor  duration-200"> {link.name}</a>
                            </li>
                        ))}
                    </ul>
                    <div className=" w-[1px] h-full bg-white mx-3" />
                    <div className=" h-full   rounded-lg text-white  cursor-pointer hover:text-secondBgColor  duration-200" >Download CV</div>
                </div>

                <div className=" h-[25px] w-[25px]  sm:hidden  cursor-pointer" onClick={toggleMenu}>
                    <img src={isMenuOpen ? close : menu} className=" cover-fill" />

                </div>
            </nav>
            {isMenuOpen && (
                <div className="fixed top-[80px] left-0 h-screen w-screen bg-firstBgColor flex flex-col z-50  ">
                    <div className=" w-screen h-[1px] bg-white" />
                    <ul className="list-none text-white ">
                        {navLinks.map((link, index) => (
                            <li key={index} className=" my-10">
                                <a
                                    href={`#${link.id}`}
                                    className=" inline py-3 px-6 font-bold text-left hover:text-secondBgColor  duration-200 "
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className=" w-screen h-[1px] bg-white" />
                    <div className=" bg-white my-2 mx-24 py-4 px-4 rounded-lg text-firstBgColor justify-center flex cursor-pointer hover:text-white hover:bg-secondBgColor duration-200">
                        Download CV
                    </div>
                </div>
            )}

        </div>
    )
}

export default AppBar