import React, { useEffect, useRef } from "react";
import './Main.css';
import cakesData from '../cakes.json';
import intro_vid from '../components/intro_vid.mp4';

function Main({ addToCart }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      console.log(videoRef.current)
      videoRef.current.play().catch(error => {
        console.log("Autoplay was prevented:", error);
      });
    }
  }, []);

  return (
    <main>
      <section id="home" className="hero">
        <video ref={videoRef} src={intro_vid} loop muted playsInline></video>
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
              <p>{cake.description}</p>
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
