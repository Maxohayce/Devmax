import { useState } from "react";
import emailjs from "@emailjs/browser";

const useContactForm = () => {
  const [formStatus, setFormStatus] = useState("Send Message");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus("Sending...");

    const serviceId = process.env.REACT_APP_serviceId;
    const templateId = process.env.REACT_APP_templateId;
    const userId = process.env.REACT_APP_publicKey;

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      to_name: "DevMax",
      message: formData.message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, userId)
      .then((response) => {
        console.log("Email sent successfully", response);
        setFormStatus("Email Sent!");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        setFormStatus("Error Sending Message");
      });
  };

  return { formStatus, formData, handleChange, handleSubmit };
};

export default useContactForm;
