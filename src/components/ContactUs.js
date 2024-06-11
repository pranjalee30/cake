import React, { useState } from "react";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    contactNumber: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save form data to local storage
    localStorage.setItem("contactFormData", JSON.stringify(formData));
    alert("Form submitted successfully.");
  };

  return (
    <div>
      <section id="contact" className="details">
        <h2>Contact Us</h2>
        {/* Contact Form */}
        <form action="https://getform.io/f/nadojevb" method="post">
          <input type="text" placeholder="Your Name" name="name" required />
          <input
            type="number"
            placeholder="123456789"
            name="contactNumber"
            required
          />
          <input type="email" placeholder="Your Email" name="email" required />
          <textarea placeholder="Your Message" name="message"></textarea>
          <button type="submit" className="stylish-button">
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}

export default ContactUs;
