import React, { useState } from "react";
import useContactForm from "../../hooks/useContactForm";
import Map from "../../components/map/map";

import "./contact.css";

const location = {
    address: "23rd R-Close Festac, Lagos, Nigeria.",
    lat: 6.4732769,
    lng: 3.2752960,
};

const Contact = () => {
    const { formStatus, formData, handleChange, handleSubmit } = useContactForm();

    return (
        <div className="contact-form">
            <div className="contact-left">
                <form action="" onSubmit={handleSubmit} method="post">
                    <h3>Would you like to get in Touch ?</h3>
                    <p></p>
                    <span className="contact-intro">
                        <input onChange={handleChange} type="text" placeholder="Name" required />
                        <input onChange={handleChange} type="text" placeholder="Email" required />
                    </span> <br />
                    <input onChange={handleChange} className="subject" type="text" placeholder="Subject" required /><br />
                    <textarea onChange={handleChange} placeholder="Message" id="message" required></textarea><br />
                    <button className="contact-btn" type="submit">{formStatus}</button>
                </form>
            </div>
            <div className="contact-address">
                <Map location={location} zoomLevel={17} />
            </div>
        </div>
    )
};

export default Contact;