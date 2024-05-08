import React from "react";
import "./about.css";
import { motion } from "framer-motion";

import Dubem from "../../assets/dubem.jpg";


const skills = [
    { title: "NextJS" }, { title: "NodeJS" }, { title: "ReactJS" }, { title: "Google Analytics" }, { title: "Google Ads" }, { title: "Typescript" }
]

const About = () => {
    return (
        <div className="about">
            <div className="about-left">
                <h3>About Me</h3>
                <div className="about-text">
                    <p>Hello! My name is Maxwell and I enjoy creating beautiful web experiences. I'm well versed in embracing search engine related considerations and security in creating the perfect experience. I started my coding journey in 2020 through an internship with Genesys Tech Hub.</p>
                    <p>I've been able to internalize some of the concepts learned and turn them into beautiful user experiences as shown in the projects. I was given the Desmond Doss award for going beyond in making sure collaborative efforts were successful and all deliverables were met in the course of the training. After a short while I had the privilege of being a part of the Zuri internship where I worked as backend Engineer.</p>
                    <p>Fast-forward to today, and I’ve had the privilege of working on a variety of stack while coming across developers of different background</p>
                </div>
                <p>Here are a few technologies and skills I've been able to grasp over the past few years</p>
                <ul className="skill-list">
                    {skills.map((skill, i) => {
                        return <motion.li
                            initial={{ x: '-100vw' }}
                            animate={{ x: '0' }}
                            transition={{ delay: 2, duration: 5, type: 'spring', stiffness: 500 }}
                            key={skill.title + i}>{skill.title}</motion.li>
                    })}
                </ul>
            </div>
            <div className="about-right">
                <motion.div
                    initial={{ y: '-200vw' }}
                    animate={{ y: 0, zIndex: 2 }}
                    transition={{ delay: 0.5, duration: 3, type: 'spring', stiffness: 40 }}
                    className="image-container">
                    <div className="image-bg1" />
                    <img src={Dubem} alt="Dubem" />
                </motion.div>
                <motion.div
                    initial={{ y: '200vw' }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.5, duration: 0.2 }}
                    className="image-bg" />
            </div>
        </div>
    )
};

export default About;