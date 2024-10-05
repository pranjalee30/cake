import React from "react";
import './Main.css'; // Updated styles for card and layout
import cakesData from '../cakes.json';

function Main({ addToCart }) {
  return (
    <main>
      <section id="home" className="hero">
        <h1>Happiness is knowing there's cake in the oven.</h1>
        <p>Explore our delicious cakes for all occasions.</p>
        <a href="#cakes" className="btn">
          Browse Cakes
        </a>
      </section>

      <section id="cakes" className="cake-catalog">
        <h2>Our Cakes</h2>
        <div className="cake-listing">
          {cakesData.map(cake => (
            <div className="cake-card" key={cake.id}>
              <div className="cake-image">
                <img src={`${process.env.PUBLIC_URL}/images/${cake.img}`} alt={cake.name} />
              </div>
              <div className="cake-content">
                <h3 className="cake-title">{cake.name}</h3>
                <p className="cake-price">Price: ${cake.price}</p>
                <p className="cake-flavor">Flavor: {cake.flavor}</p>
                <p className="cake-description">{cake.description}</p>
              </div>
              <div className="cake-actions">
              <button className="add-to-cart" onClick={() => addToCart(cake)}>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Main;
