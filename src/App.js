import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Header Section */}
      <header className="header">
        <div className="scrolling-text">
          <div>Welcome to Cake Creations!</div>
        </div>
        {/* Navigation Menu */}
        <nav className="navigation">
          <a href="/">
            <h1 className="CompanyName">Cake Creations</h1>
          </a>
          <ul className="list">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#cakes">Cakes</a>
            </li>
            <li>
              <a href="#aboutus">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="#login">Login</a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main Content Section */}
      <main>
        {/* Hero Section */}

        <section id="home" className="hero">
          <h1>Happiness is knowing there's cake in the oven.</h1>
          <p>Explore our delicious cakes for all occasions.</p>
          <a href="#cakes" className="btn">
            Browse Cakes
          </a>
        </section>

        {/* Cake Catalog Section */}
        <section id="cakes" className="cake-catalog">
          <h2>Our Cakes</h2>
          {/* Display Cake Listings */}
          <div className="cake-listing">
            {/* Cake 1 */}
            <div className="cake">
              <img src="images/1.jpeg" alt="Cake 1" />
              <h3>Chocolate Delight</h3>
              <p>
                A rich chocolate cake with layers of chocolate ganache, perfect
                for chocolate lovers.
              </p>
              <p>Flavor: Chocolate</p>
              <p>Price: $25</p>
              <button>Add to Cart</button>
            </div>

            {/* Cake 2 */}
            <div className="cake">
              <img src="images/2.jpeg" alt="Cake 2" />
              <h3>Vanilla Dream</h3>
              <p>
                A classic vanilla cake with vanilla buttercream frosting, ideal
                for any celebration.
              </p>
              <p>Flavor: Vanilla</p>
              <p>Price: $20</p>
              <button>Add to Cart</button>
            </div>

            {/* Cake 3 */}
            <div className="cake">
              <img src="images/3.jpeg" alt="Cake 3" />
              <h3>Chocolate Indulgence</h3>
              <p>Decadent cake with rich ganache, satisfying cravings</p>
              <p>Flavor: Chocolate</p>
              <p>Price: $25</p>
              <button>Add to Cart</button>
            </div>

            {/* Cake 4 */}
            <div className="cake">
              <img src="images/4.jpeg" alt="Cake 4" />
              <h3>Red Velvet Delight</h3>
              <p>
                Smooth cake with cream cheese frosting, delights taste buds.
              </p>
              <p>Flavor: Red Velvet</p>
              <p>Price: $30</p>
              <button>Add to Cart</button>
            </div>
            {/* Cake 5 */}
            <div className="cake">
              <img src="images/5.jpeg" alt="Cake 5" />
              <h3>Lemon Zest Sensation</h3>
              <p>
                Refreshing cake with tangy curd filling, burst of citrus flavor.
              </p>
              <p>Flavor: Lemon</p>
              <p>Price: $28</p>
              <button>Add to Cart</button>
            </div>
            {/* Cake 6 */}
            <div className="cake">
              <img src="images/6.jpeg" alt="Cake 6" />
              <h3>Carrot Crunch Cake</h3>
              <p>Moist cake with walnuts, topped with cream cheese frosting.</p>
              <p>Flavor: Carrot</p>
              <p>Price: $32</p>
              <button>Add to Cart</button>
            </div>
            {/* Cake 7 */}
            <div className="cake">
              <img src="images/7.jpeg" alt="Cake 7" />
              <h3>Strawberry Bliss</h3>
              <p>
                Delightful cake bursting with fresh strawberries, perfect for
                summer.
              </p>
              <p>Flavor: Strawberry</p>
              <p>Price: $26</p>
              <button>Add to Cart</button>
            </div>
            {/* Cake 8 */}
            <div className="cake">
              <img src="images/8.jpeg" alt="Cake 8" />
              <h3>Coconut Dream Cake</h3>
              <p>
                Tropical cake with coconut cream layers, transports to paradise.
              </p>
              <p>Flavor: Coconut</p>
              <p>Price: $27</p>
              <button>Add to Cart</button>
            </div>
            {/* Cake 9 */}
            <div className="cake">
              <img src="images/9.jpeg" alt="Cake 9" />
              <h3>Coffee Caramel Indulgence</h3>
              <p>Rich coffee cake with caramel layers, heavenly treat.</p>
              <p>Flavor: Coffee</p>
              <p>Price: $29</p>
              <button>Add to Cart</button>
            </div>
            {/* Cake 10 */}
            <div className="cake">
              <img src="images/10.jpeg" alt="Cake 10" />
              <h3>Banana Nut Delight</h3>
              <p>
                Moist banana cake with creamy frosting, comforting dessert
                choice.
              </p>
              <p>Flavor: Banana</p>
              <p>Price: $31</p>
              <button>Add to Cart</button>
            </div>
            {/* Cake 11 */}
            <div className="cake">
              <img src="images/11.jpeg" alt="Cake 11" />
              <h3>Raspberry White Chocolate</h3>
              <p>
                Delicate cake with tangy preserves, covered in white chocolate.
              </p>
              <p>Flavor: White Chocolate</p>
              <p>Price: $33</p>
              <button>Add to Cart</button>
            </div>
            {/* Cake 12 */}
            <div className="cake">
              <img src="images/12.jpeg" alt="Cake 12" />
              <h3>Pineapple Upside-Down Cake</h3>
              <p>
                Classic cake with caramelized pineapple, moist vanilla sponge.
              </p>
              <p>Flavor: Pineapple</p>
              <p>Price: $28</p>
              <button>Add to Cart</button>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section id="about" className="about-us">
          <h2>About Us</h2>
          <p>
            Welcome to Cake Creations! Our bakery is dedicated to crafting
            exquisite cakes that bring joy to every celebration. From classic
            flavors to custom designs, we cater to all your cake desires with
            the finest ingredients and artistic flair. Our mission is to sweeten
            your special moments and create unforgettable experiences. Visit us
            and discover the magic of Cake Creations, where every bite is a
            delight.
            <br />
            <br />
            Thank you for choosing Cake Creations. We look forward to being a
            part of your sweetest celebrations!
          </p>
        </section>

        {/* Contact Section */}
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
      </main>

      {/* Footer Section */}
      <footer className="footer">
        <p>&copy; 2024 Cake Creations. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
