import React from "react";
import { PlaySound } from "../../components";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {

    return (
        <div className="intro">
            <div className="intro-text">
                <h1>Hi <br /> I'm <b>Max</b>well, <br /> I build websites</h1>
                <i>FullStack developer</i>
                <Link to={"/contact"}>
                    <button>Contact me!</button>
                </Link>
            </div>
            <PlaySound />
        </div>
    )
}

export default Header;