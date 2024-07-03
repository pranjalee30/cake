import React, { useState } from "react";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    contactNumber: "",
    email: "",
    message: "",
  });

  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "contactNumber") {
      const contactNumber = value.replace(/[^0-9]/g, "").slice(0, 10);
      setFormData({ ...formData, [name]: contactNumber });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://getform.io/f/nadojevb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setSubmitStatus("Success: Your message has been sent!");
        setFormData({
          name: "",
          contactNumber: "",
          email: "",
          message: "",
        });
      } else {
        setSubmitStatus("Error: Unable to send your message.");
      }
    } catch (error) {
      setSubmitStatus("Error: Unable to send your message.");
    }

    // Clear the submission status after 3 seconds
    setTimeout(() => {
      setSubmitStatus(null);
    }, 3000);
  };

  return (
    <main>
      <section id="contact" className="details">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <label>
            <h4>Your Name</h4>
            <input
              type="text"
              name="name"
              placeholder="eg.Pranjal Kumar"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            <h4>Contact Number</h4>
            <input
              type="text"
              name="contactNumber"
              placeholder="eg.1234567890"
              value={formData.contactNumber}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            <h4>Your Email</h4>
            <input
              type="email"
              name="email"
              placeholder="eg.pranjalkee010@gmail.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            <h4>Your Message</h4>
            <textarea
              name="message"
              placeholder="eg.Hi,I am Pranjal"
              value={formData.message}
              onChange={handleChange}
            />
          </label>
          <button type="submit" className="stylish-button">
            Send Message
          </button>
        </form>
        {submitStatus && <p>{submitStatus}</p>}
      </section>
    </main>
  );
}

export default ContactUs;
