import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import "./navbar.css";
import Dubem from "../../assets/dubem.jpg";
import { Resume } from "../index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Menu = [
    {
        title: "About",
        path: "/about",
        cName: "navbarLink",
        id: 12,
    },
    {
        title: "Projects",
        path: "/projects",
        cName: "navbarLink",
        id: 13,
    },
    {
        title: "Contact",
        path: "/contact",
        cName: "navbarLink",
        id: 14,
    },
];


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Function to check if device is mobile
    const checkIsMobile = () => {
        setIsMobile(window.innerWidth <= 768); // Adjust the width for mobile devices
    };

    useEffect(() => {
        checkIsMobile(); // Initial check
        window.addEventListener("resize", checkIsMobile); // Check on window resize
        return () => {
            window.removeEventListener("resize", checkIsMobile); // Cleanup listener
        };
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const menuVars = {
        open: {
            scale: 1,
            transition: {
                delay: 0.15,
            },
        },
        close: {
            scale: 0,
            transition: {
                type: "spring",
                duration: 0.05,
                delayChildren: 0.2,
                staggerChildren: 0.5,
            },
        },
    }

    const menuItem = {
        closed: { x: -35, opacity: 0 },
        open: { x: 8, opacity: 1 },
        transition: { opacity: { duration: 3 } },
    };

    return (
        <nav
            className="navbar">
            <div className="navbarLinks">
                <div className="navbarLogo">
                    <Link exact to="/">
                        <img src={Dubem} alt="myLogo" />
                    </Link>
                </div>
                <AnimatePresence>
                    <motion.ul
                        variants={menuVars}
                        initial="closed"
                        animate={isMobile ? (menuOpen ? "open" : "closed") : "open"}
                        exit="closed"
                        className={`navbarLinks_container ${menuOpen ? "navbarLinks_container" : "navbarLinks_container-close"}`}
                    >
                        {Menu.map((item) => (
                            <Link key={item.id} onClick={toggleMenu} className={item.cName} to={item.path}>
                                <motion.li variants={menuItem} key={item.id}>{item.title}</motion.li>
                            </Link>
                        ))}
                        <div className="navSocial">
                            <Resume />
                        </div>
                    </motion.ul>
                </AnimatePresence>
                <button className="menuIcon" onClick={toggleMenu}>
                    <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
