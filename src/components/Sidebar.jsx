import React, { Children, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBars, FaHome, FaUser } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { BiAnalyse, BiSearch } from "react-icons/bi";
import { BiCog } from "react-icons/bi";
import { AiFillHeart, AiTwotoneFileExclamation } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";
import { NavLink } from 'react-router-dom'
const routes = [
    {
        path: "/",
        name: 'DashBoard',
        icon: <FaHome />
    },
    {
        path: "/users",
        name: "Users",
        icon: <FaUser />,
    },
    {
        path: "/messages",
        name: "Messages",
        icon: <MdMessage />,
    },
    {
        path: "/analytics",
        name: "Analytics",
        icon: <BiAnalyse />,
    },
    {
        path: "/filemanager",
        name: "File Manager",
        icon: <AiTwotoneFileExclamation />,
    },
    {
        path: "/order",
        name: "Order",
        icon: <BsCartCheck />,
    },
    {
        path: "/saved",
        name: "Saved",
        icon: <AiFillHeart />,
    },
    {
        path: "/settings",
        name: "Settings",
        icon: <BiCog />,
    },
]
const Sidebar = ({ children }) => {
    const [isOpen, setIsOpen] = useState()

    const toggle = () => setIsOpen(!isOpen);

    const inputAnimation = {
        hidden: {
            width: 0,
            padding: 0,
            opacity: 0,
            transition: {
                duration: 0.2,
            },
        },
        show: {
            width: "140px",
            padding: "5px 10px",
            transition: {
                duration: 0.2,
            },
            opacity: 1
        }
    }

    const showAnimation = {
        hidden: {
            width: 0,
            opacity: 0,
            transition: {
                duration: 0.5,
            },
        },
        show: {
            width: "auto",
            transition: {
                duration: 0.2,
            },
            opacity: 1
        }
    }

    return (
        <>
            <div className="main-container">
                <motion.div animate={{
                    width: isOpen ? "200px" : "45px", transition: {
                        duration: 0.5,
                        type:"spring",
                        damping: 11,
                    }
                }}
                    className="sidebar">
                    <div className="top_section">
                        {isOpen && <motion.h1 variants={showAnimation} initial="hidden" animate="show" exit="hidden" className="logo">ScriptOptim</motion.h1>}
                        <div className="bars">
                            <FaBars onClick={toggle} />
                        </div>
                    </div>
                    <div className="search">
                        <div className="search_icon">
                            <BiSearch />
                        </div>
                        <AnimatePresence>
                            {isOpen && <motion.input initial="hidden" animate="show" exit="hidden" variants={inputAnimation} placeholder="Search" />}
                        </AnimatePresence>
                    </div>
                    <section className="routes">
                        {routes.map((route, index) => {
                            return (
                                <NavLink activeClassName="active" to={route.path} key={index} className=" link">
                                    <div className="icon">{route.icon}</div>
                                    <AnimatePresence>
                                        {isOpen && <motion.div variants={showAnimation} initial="hidden" animate="show" exit="hidden" className="link_text">{route.name}
                                        </motion.div>
                                        }
                                    </AnimatePresence>
                                </NavLink>
                            );
                        })}
                    </section>
                </motion.div>
                <main>{children}</main>
            </div>
        </>
    )
}

export default Sidebar