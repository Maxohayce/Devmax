import React from "react";
import "./about.css";

import Dubem from "../../assets/dubem.jpg";

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
                    <li>JavaScript</li>
                    <li>NodeJS</li>
                    <li>ReactJS</li>
                    <li>Google Analytics</li>
                    <li>Google Ads</li>
                    <li>Typescript</li>
                </ul>
            </div>
            <div className="about-right">
                <div className="image-container">
                    <div className="image-bg1" />
                    <img src={Dubem} alt="Dubem" />
                </div>
                <div className="image-bg" />
            </div>
        </div>
    )
};

export default About;