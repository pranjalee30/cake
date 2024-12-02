import React from "react";
import "./Main.css";
import cakesData from "../cakes.json";

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
          {cakesData.map((cake) => (
            <div className="cake" key={cake.id}>
              <img
                src={`${process.env.PUBLIC_URL}/images/${cake.img}`}
                alt={cake.name}
              />
              <div className="cake-overlay">
                <div className="cake-header">
                  <h3>{cake.name}</h3>
                  <p className="cake-price">Price: ${cake.price}</p>
                </div>
                <p className="cake-flavor">{cake.flavor}</p>
                <p className="cake-description">{cake.description}</p>
                <button className="add-to-cart" onClick={() => addToCart(cake)}>
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Main;
