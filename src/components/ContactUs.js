import React from "react";

function ContactUS() {
  return (
    <div>
      <section id="contact" className="details">
        <h2>Contact Us</h2>
        {/* Contact Form */}
        <form>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>
    </div>
  );
}
export default ContactUs;
