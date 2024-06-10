import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Header Section */}
      <header className="header">
        <h1 className="CompanyName">Cake</h1>
        {/* Navigation Menu */}
        <nav className="navigation">
          <ul className="list">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#cakes">Cakes</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="#login">Login</a>
            </li>
          </ul>
        </nav>
        <div className="scrolling-text">Your scrolling text here</div>
      </header>

      {/* Main Content Section */}
      <main>
        {/* Hero Section */}

        <section id="home" className="hero">
          <h2>Welcome to Cake Creations!</h2>
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
              <img src="cake1.jpg" alt="Cake 1" />
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
              <img src="cake2.jpg" alt="Cake 2" />
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
              <img src="cake2.jpg" alt="Cake 3" />
              <h3>Vanilla Dream</h3>
              <p>
                A classic vanilla cake with vanilla buttercream frosting, ideal
                for any celebration.
              </p>
              <p>Flavor: Vanilla</p>
              <p>Price: $20</p>
              <button>Add to Cart</button>
            </div>

            {/* Cake 4 */}
            <div className="cake">
              <img src="cake2.jpg" alt="Cake 4" />
              <h3>Vanilla Dream</h3>
              <p>
                A classic vanilla cake with vanilla buttercream frosting, ideal
                for any celebration.
              </p>
              <p>Flavor: Vanilla</p>
              <p>Price: $20</p>
              <button>Add to Cart</button>
            </div>
            {/* Cake 5 */}
            <div className="cake">
              <img src="cake2.jpg" alt="Cake 5" />
              <h3>Vanilla Dream</h3>
              <p>
                A classic vanilla cake with vanilla buttercream frosting, ideal
                for any celebration.
              </p>
              <p>Flavor: Vanilla</p>
              <p>Price: $20</p>
              <button>Add to Cart</button>
            </div>
            {/* Cake 6 */}
            <div className="cake">
              <img src="cake2.jpg" alt="Cake 6" />
              <h3>Vanilla Dream</h3>
              <p>
                A classic vanilla cake with vanilla buttercream frosting, ideal
                for any celebration.
              </p>
              <p>Flavor: Vanilla</p>
              <p>Price: $20</p>
              <button>Add to Cart</button>
            </div>
            {/* Cake 7 */}
            <div className="cake">
              <img src="cake2.jpg" alt="Cake 7" />
              <h3>Vanilla Dream</h3>
              <p>
                A classic vanilla cake with vanilla buttercream frosting, ideal
                for any celebration.
              </p>
              <p>Flavor: Vanilla</p>
              <p>Price: $20</p>
              <button>Add to Cart</button>
            </div>
            {/* Cake 8 */}
            <div className="cake">
              <img src="cake2.jpg" alt="Cake 8" />
              <h3>Vanilla Dream</h3>
              <p>
                A classic vanilla cake with vanilla buttercream frosting, ideal
                for any celebration.
              </p>
              <p>Flavor: Vanilla</p>
              <p>Price: $20</p>
              <button>Add to Cart</button>
            </div>
            {/* Cake 9 */}
            <div className="cake">
              <img src="cake2.jpg" alt="Cake 9" />
              <h3>Vanilla Dream</h3>
              <p>
                A classic vanilla cake with vanilla buttercream frosting, ideal
                for any celebration.
              </p>
              <p>Flavor: Vanilla</p>
              <p>Price: $20</p>
              <button>Add to Cart</button>
            </div>
            {/* Cake 10 */}
            <div className="cake">
              <img src="cake2.jpg" alt="Cake 10" />
              <h3>Vanilla Dream</h3>
              <p>
                A classic vanilla cake with vanilla buttercream frosting, ideal
                for any celebration.
              </p>
              <p>Flavor: Vanilla</p>
              <p>Price: $20</p>
              <button>Add to Cart</button>
            </div>
            {/* Cake 11 */}
            <div className="cake">
              <img src="cake2.jpg" alt="Cake 11" />
              <h3>Vanilla Dream</h3>
              <p>
                A classic vanilla cake with vanilla buttercream frosting, ideal
                for any celebration.
              </p>
              <p>Flavor: Vanilla</p>
              <p>Price: $20</p>
              <button>Add to Cart</button>
            </div>
            {/* Cake 12 */}
            <div className="cake">
              <img src="cake2.jpg" alt="Cake 12" />
              <h3>Vanilla Dream</h3>
              <p>
                A classic vanilla cake with vanilla buttercream frosting, ideal
                for any celebration.
              </p>
              <p>Flavor: Vanilla</p>
              <p>Price: $20</p>
              <button>Add to Cart</button>
            </div>
            {/* Cake 13 */}
            <div className="cake">
              <img src="cake2.jpg" alt="Cake 13" />
              <h3>Vanilla Dream</h3>
              <p>
                A classic vanilla cake with vanilla buttercream frosting, ideal
                for any celebration.
              </p>
              <p>Flavor: Vanilla</p>
              <p>Price: $20</p>
              <button>Add to Cart</button>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section id="about" className="about-us">
          <h2>About Us</h2>
          <p>Learn more about our cake bakery...</p>
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
