import React from "react";
import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import About from "./components/About";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";
import "./App.css";

function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  return (
    <div className={darkTheme ? "App dark-theme" : "App light-theme"}>
      <div className="scrolling-text">
        <div>Welcome to Cake Creations!</div>
      </div>
      {/* Header Content Section */}
      <Header toggleTheme={toggleTheme} darkTheme={darkTheme} />
      {/* Main Content Section */}
      <Main />
      {/* About Us Section */}
      <About />
      {/* Contact Section */}
      <ContactUs />
      {/*Footer Section */}
      <Footer />
    </div>
  );
}

export default App;
