import React from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import About from "./components/About";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";
function App() {
  return (
    <div className="App">
      {/* Header Section */}
      <Header />
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
