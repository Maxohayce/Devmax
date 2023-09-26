import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import CardDetails from "../../components/card/constant";

import "./projects.css";
import Dubem from "../../assets/dubem.jpg";
import learnable from "../../assets/learnable.png";

import Card from "../../components/card/card";


const Projects = () => {
    return (
        <div className="portfolio">
            <div className="portfolioHeader">
                <h2>A mini showcase of my work</h2> <br />
                <p>This is a small gallery of projects chosen by me. I worked on some of them together with amazing people in the Nigerian tech space. It's only the beginning of a beautiful journey into a future </p>
            </div>
            <section className="projectSection">
                <div className="project">
                    <div className="projectDetails">
                        <h6>Featured Project</h6>
                        <h3>Learnable</h3>
                        <p>A redesign of the learnable website showcase deep grasp of all basic react concepts without functionalities</p>
                        <ul className="stack">
                            <li>React</li>
                            <li>css</li>
                            <li>Firebase</li>
                            <li>Firebase</li>
                            <li>Firebase</li>
                        </ul>
                        <span className="projectLinks">
                            <a href="https://github.com/Maxohayce/Press-Play" target="_blank" rel="noReferrer" className="Github-social">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                            <a href="https://infallible-austin-bf6778.netlify.app/" target="_blank" rel="noReferrer" className="external-link">
                                <FontAwesomeIcon icon={faUpRightFromSquare} />
                            </a>
                        </span>
                    </div>
                    <div className="projectImage">
                        <div className="projectBg" />
                        <img src={learnable} alt="learnable" />
                    </div>
                </div>
                <div className="project">
                    <div className="projectDetails">
                        <h6>Featured Project</h6>
                        <h3>AnyLease</h3>
                        <p>A website where Users can lease or get equipments not currently needed or in use for a token, A HNG project</p>
                        <ul className="stack">
                            <li>React</li>
                            <li>Tailwind</li>
                            <li>Firebase</li>
                            <li>Express</li>
                            <li>Firebase</li>
                        </ul>
                        <span className="projectLinks">
                            <a href="https://github.com/Maxohayce/Press-Play" target="_blank" rel="noReferrer" className="Github-social">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                            <a href="https://infallible-austin-bf6778.netlify.app/" target="_blank" rel="noReferrer" className="external-link">
                                <FontAwesomeIcon icon={faUpRightFromSquare} />
                            </a>
                        </span>
                    </div>
                    <div className="projectImage">
                        <div className="projectBg" />
                        <img src={Dubem} alt="" />
                    </div>
                </div>

            </section>
            <section className="otherProjects">
                {CardDetails.map((item) => {
                    return <Card href={item.href} title={item.title} details={item.details} stack={item.stack} />
                })}
            </section>
        </div>
    )
};

export default Projects;