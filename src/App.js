import React, { useState } from "react";
import Header from "./components/Header.js";
import Main from "./components/Main.js";
import About from "./components/About.js";
import Footer from "./components/Footer.js";
import "./App.css";
import { AuthProvider } from './components/AuthContext.js';
function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <AuthProvider>
    <div className={`App ${theme}`}>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Main />
      <About />
      <Footer />
    </div>
    </AuthProvider>
  );
}

export default App;
