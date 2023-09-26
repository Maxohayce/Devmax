import React from "react";
import "./socialLinks.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTwitter, faLinkedin, faGoogle } from "@fortawesome/free-brands-svg-icons";

const icons = [
    {
        title: faGithub,
        link: "https://github.com/Maxohayce",
        cName: "Github-social"
    },
    {
        title: faTwitter,
        link: "https://twitter.com/chidux15",
        cName: "twitter-social"
    },
    {
        title: faLinkedin,
        link: "https://www.linkedin.com/in/devmax15",
        cName: "social"

    },
    {
        title: faGoogle,
        link: "",
        cName: "social"
    }
]

const SocialLinks = () => {
    return (
        <div className="socialLinks">
            {icons.map((item, i) => {
                const { link, cName, title } = item;
                return (
                    <a key={i} href={link} target="_blank" rel="noReferrer" className={cName}>
                        <FontAwesomeIcon className="social" icon={title} />
                    </a>
                )
            })}
        </div>
    )
};

export default SocialLinks;