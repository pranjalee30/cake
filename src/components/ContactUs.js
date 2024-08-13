import React, { useState } from 'react';
import './ContactUs.css';

function ContactUs() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <main>
      <button onClick={openModal} className="open-modal-button">
        Contact Us
      </button>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button onClick={closeModal} className="close-button">X</button>
            <section id="contact" className="contact-section">
              <h2>Contact Us</h2>
              <form>
                <label>
                  <h4>Your Name</h4>
                  <input
                    type="text"
                    name="name"
                    placeholder="eg. Pranjal Kumar"
                    required
                  />
                </label>
                <label>
                  <h4>Contact Number</h4>
                  <input
                    type="text"
                    name="contactNumber"
                    placeholder="eg. 1234567890"
                    required
                  />
                </label>
                <label>
                  <h4>Your Email</h4>
                  <input
                    type="email"
                    name="email"
                    placeholder="eg. pranjalkee010@gmail.com"
                    required
                  />
                </label>
                <label>
                  <h4>Your Message</h4>
                  <textarea
                    name="message"
                    placeholder="eg. Hi, I am Pranjal"
                  />
                </label>
                <button type="submit" className="stylish-button">
                  Send Message
                </button>
              </form>
            </section>
          </div>
        </div>
      )}
    </main>
  );
}

export default ContactUs;
