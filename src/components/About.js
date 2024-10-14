import React, { useState } from 'react';
import './About.css';
import './ContactUs.css';

function About({theme}) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div>
      <section id="about" className={theme ?"dark-about" :"about-section"}>
        <h2>About Us</h2>
        <p>
          Welcome to Cake Creations! Our bakery is dedicated to crafting
          exquisite cakes that bring joy to every celebration. From classic
          flavors to custom designs, we cater to all your cake desires with the
          finest ingredients and artistic flair. Our mission is to sweeten your
          special moments and create unforgettable experiences. Visit us and
          discover the magic of Cake Creations, where every bite is a delight.
          <br />
          <br />
          Thank you for choosing Cake Creations. We look forward to being a part
          of your sweetest celebrations!
        </p>
        <div className="contact-button-container">
          <button onClick={openModal} className="open-modal-button">
            Contact Us
          </button>
        </div>
      </section>

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
    </div>
  );
}

export default About;
