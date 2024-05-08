import { useState } from "react";
import emailjs from "@emailjs/browser";

const useContactForm = () => {
  const [formStatus, setFormStatus] = useState("Send Message");
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus("Sending...");

    const serviceId = process.env.REACT_APP_serviceId;
    const templateId = process.env.REACT_APP_templateId;
    const userId = process.env.REACT_APP_publicKey;

    emailjs
      .send(serviceId, templateId, formData, userId) // Pass formData directly
      .then((response) => {
        console.log("Email sent successfully", response);
        setFormStatus("Email Sent!");
        setFormData({
          from_name: "",
          from_email: "",
          subject: "",
          message: "",
        });

        setTimeout(() => {
          setFormStatus("Send Message");
        }, 3000);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        setFormStatus("Error Sending Message");
      });
  };

  return { formStatus, formData, handleChange, handleSubmit };
};

export default useContactForm;