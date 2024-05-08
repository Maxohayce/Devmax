import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile, faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

import "./card.css";

const Card = ({ title, details, stack, href }) => {
    return (
        <div className="projectCard" href={href} target="_blank" rel="noReferrer">
            <div className="cardTop">
                <FontAwesomeIcon icon={faFile} className="project-file" />
                <a href={href} target="_blank" rel="noReferrer" className="external-link"><FontAwesomeIcon icon={faUpRightFromSquare} /></a>
            </div>
            <div className="cardBottom">
                <h4>{title}</h4>
                <p>{details}</p>
                <ul className="stack">
                    <li>{stack[0]}</li>
                    <li>{stack[1]}</li>
                    <li>{stack[2]}</li>
                </ul>
            </div>
        </div>
    );
}

export default Card;