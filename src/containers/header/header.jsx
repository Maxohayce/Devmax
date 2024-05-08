import React from "react";
import { PlaySound } from "../../components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./header.css";

const Header = () => {

    return (
        <div className="intro">
            <div className="intro-content">
                <div className="intro-text">
                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5, duration: 1 }}
                    >Hi <br /> I'm <b>Max</b>well, <br /> I build websites</motion.h1>
                    <i>FullStack developer</i>
                    <Link to={"/contact"}>
                        <motion.button
                            initial={{ x: '-100vw' }}
                            animate={{ x: 0 }}
                            transition={{ delay: 0.8, duration: 2, type: 'spring', stiffness: 120 }}
                        >Contact me!</motion.button>
                    </Link>
                </div>
                <PlaySound />
            </div>
        </div>
    )
}

export default Header;