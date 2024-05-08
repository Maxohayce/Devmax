import React from "react";
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
                <form onSubmit={handleSubmit} method="post">
                    <h3>Would you like to get in Touch ?</h3>
                    <span className="contact-intro">
                        <input
                            onChange={handleChange}
                            type="text"
                            placeholder="Name"
                            name="from_name" // Add name attribute
                            value={formData.from_name}
                            required
                        />
                        <input
                            onChange={handleChange}
                            type="email"
                            placeholder="Email"
                            name="from_email" // Add name attribute
                            value={formData.from_email}
                            required
                        />
                    </span>
                    <br />
                    <input
                        onChange={handleChange}
                        className="subject"
                        type="text"
                        placeholder="Subject"
                        name="subject" // Add name attribute
                        value={formData.subject}
                        required
                    />
                    <br />
                    <textarea
                        onChange={handleChange}
                        placeholder="Message"
                        id="message"
                        name="message" // Add name attribute
                        value={formData.message}
                        required
                    ></textarea>
                    <br />
                    <button className="contact-btn" type="submit">
                        {formStatus}
                    </button>
                </form>
            </div>
            <div className="contact-address">
                <Map location={location} zoomLevel={17} />
            </div>
        </div>
    );
};

export default Contact;