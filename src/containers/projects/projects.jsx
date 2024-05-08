import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import CardDetails from "../../components/card/constant";

import "./projects.css";
import pressplay from "../../assets/pressplay.png";
import tribe from "../../assets/tribe.png";

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
                        <h3>Free-Tribe Network</h3>
                        <p>An NGO website built with Next.js that uses server actions to fetch content from WordPress. I worked on the resources page and the who we are page, then I connected the the website to wordpress as a CMS.</p>
                        <ul className="stack">
                            <li>Typescript</li>
                            <li>Tailwind</li>
                            <li>Wordpress</li>
                            <li>Next</li>
                            <li>Firebase</li>
                        </ul>
                        <span className="projectLinks">
                            <a href="https://github.com/amjedidiah/free-tribe-network" target="_blank" rel="noReferrer" className="Github-social">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                            <a href="https://free-tribe-network.vercel.app/" target="_blank" rel="noReferrer" className="external-link">
                                <FontAwesomeIcon icon={faUpRightFromSquare} />
                            </a>
                        </span>
                    </div>
                    <div className="projectImage">
                        <div className="projectBg" />
                        <img src={tribe} alt="learnable" />
                    </div>
                </div>
                <div className="project">
                    <div className="projectDetails">
                        <h6>Featured Project</h6>
                        <h3>Press Play</h3>
                        <p>A podcast platform created at the end of genesys learnable program. I worked on the UI along with a colleague, implemented the firebase connection and fetched the initial dummy podcasts from an api</p>
                        <ul className="stack">
                            <li>Javascript</li>
                            <li>React Lottie</li>
                            <li>Firebase</li>
                            <li>React</li>
                            <li>Css</li>
                        </ul>
                        <span className="projectLinks">
                            <a href="https://github.com/amjedidiah/dad" target="_blank" rel="noReferrer" className="Github-social">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                            <a href="https://infallible-austin-bf6778.netlify.app/" target="_blank" rel="noReferrer" className="external-link">
                                <FontAwesomeIcon icon={faUpRightFromSquare} />
                            </a>
                        </span>
                    </div>
                    <div className="projectImage">
                        <div className="projectBg" />
                        <img src={pressplay} alt="press-play" />
                    </div>
                </div>

            </section>
            <section className="otherProjects">
                {CardDetails.map((item, i) => {
                    return <Card key={item.title + i} href={item.href} title={item.title} details={item.details} stack={item.stack} />
                })}
            </section>
        </div>
    )
};

export default Projects;