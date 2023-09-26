import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

import "./navbar.css";
import Dubem from "../../assets/dubem.jpg";
import { SocialLinks } from "../index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Menu = [
    {
        title: "About",
        path: "/about",
        cName: "navbarLink",
        id: 12,
    },
    {
        title: "Projects",
        path: "/projects",
        cName: "navbarLink",
        id: 13,
    },
    {
        title: "Contact",
        path: "/contact",
        cName: "navbarLink",
        id: 14,
    },
]

const Navbar = () => {
    const [menu, setMenu] = useState(false);
    const NavRef = useRef(null);
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!NavRef.current.contains(event.target)) {
                setMenu(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleMenu = () => {
        if (menu === false) {
            setMenu(true)
        } else {
            setMenu(false)
        }
    }
    const closeMenu = () => {
        setMenu(false)
    }
    return (
        <nav className="navbar">
            <div className="navbarLinks">
                <div className="navbarLogo">
                    <Link exact to="/"><img src={Dubem} alt="myLogo" /></Link>
                </div>
                <ul ref={NavRef}
                    className={`navbarLinks_container ${menu ? "navbarLinks_container" : "navbarLinks_container-close"}`}>
                    {Menu.map((item, id) => {
                        return (
                            <Link key={id} onClick={() => closeMenu()} className={item.cName} to={item.path}>
                                <li key={id}>
                                    {item.title}
                                </li>
                            </Link>
                        )
                    })}
                    <SocialLinks className="navSocial" />
                </ul>
                <button className="menuIcon" onClick={() => toggleMenu()}>
                    <FontAwesomeIcon icon={menu ? faTimes : faBars} />
                </button>
            </div>
        </nav >
    )
};

export default Navbar;