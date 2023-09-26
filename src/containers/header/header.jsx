import React from "react";
import { PlaySound } from "../../components";
import "./header.css";

const Header = () => {
    
    return (
        <div className="intro">
            <div className="intro-text">
                <h1>Hi <br/> I'm <b>Max</b>well, <br/> I build websites</h1>
                <i>FullStack developer</i>
                <button>Contact me!</button>
            </div>
            <PlaySound />
        </div>
    )
}

export default Header;