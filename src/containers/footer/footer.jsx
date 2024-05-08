import React from "react";
import "./footer.css";

import { SocialLinks } from "../../containers";

const Footer = () => {
    return (
        <div className="footer">
            <SocialLinks />
            <div>Copyright @ DevMax</div>
        </div>
    )
};

export default Footer;