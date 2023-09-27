import React, { useState, useEffect, useRef } from "react";
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
];

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const NavRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (NavRef.current && !NavRef.current.contains(event.target)) {
                setMenuOpen(false);
            }
        };

        const handleScroll = () => {
            setMenuOpen(false);
        };

        document.addEventListener("mousedown", handleClickOutside);
        window.addEventListener("scroll", handleScroll);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbarLinks">
                <div className="navbarLogo">
                    <Link exact to="/">
                        <img src={Dubem} alt="myLogo" />
                    </Link>
                </div>
                <ul
                    ref={NavRef}
                    className={`navbarLinks_container ${menuOpen ? "navbarLinks_container" : "navbarLinks_container-close"}`}
                >
                    {Menu.map((item, id) => (
                        <Link key={id} onClick={toggleMenu} className={item.cName} to={item.path}>
                            <li key={id}>{item.title}</li>
                        </Link>
                    ))}
                    <SocialLinks className="navSocial" />
                </ul>
                <button className="menuIcon" onClick={toggleMenu}>
                    <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
