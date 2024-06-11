import React from "react";

function ContactUs() {
  return (
    <div>
      <section id="contact" className="details">
        <h2>Contact Us</h2>
        {/* Contact Form */}
        <form action="mailto:pranjalkee010@gmail.com" method="post">
          <input type="text" placeholder="Your Name" required />
          <input type="number" placeholder="Contact Number" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message"></textarea>
          <button type="submit" class="stylish-button">
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}
export default ContactUs;
