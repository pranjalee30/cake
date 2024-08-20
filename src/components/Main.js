import React from "react";
import './Main.css';
import cakesData from '../cakes.json';
function Main({ cart, addToCart, removeFromCart, placeOrder }) {

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
            <div className="cake" key={cake.id}>
              <img src={`${process.env.PUBLIC_URL}/images/${cake.img}`} alt={cake.name} />
              <h3>{cake.name}</h3>
              <p>{cake.flavor}</p>
              <p>Price: ${cake.price}</p>
              <button onClick={() => addToCart(cake)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Main;
