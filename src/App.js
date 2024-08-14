import React, { useState } from "react";
import Header from "./components/Header.js";
import Main from "./components/Main.js";
import About from "./components/About.js";
import Footer from "./components/Footer.js";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className={`App ${theme}`}>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Main />
      <About />
      <Footer />
    </div>
  );
}

export default App;
