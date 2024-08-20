import React, { useState,useNavigate,useEffect} from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header.js";
import Main from "./components/Main.js";
import About from "./components/About.js";
import Footer from "./components/Footer.js";
import Cart from "./components/Cart.js";
import Login from "./components/Login.js";
import "./App.css";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [theme, setTheme] = useState("light");
  const [cart, setCart] = useState([]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const addToCart = (item) => {
    setCart(prevCart => {
      const existingItemIndex = prevCart.findIndex(c => c.id === item.id);
      if (existingItemIndex > -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex].quantity += 1;
        <ToastContainer />
        toast.success("Item added to cart!");
        return updatedCart;
      } else {
        <ToastContainer />
        toast.success("Item added to cart!");
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCart(prevCart => {
      const existingItemIndex = prevCart.findIndex(c => c.id === id);
      if (existingItemIndex > -1) {
        const updatedCart = [...prevCart];
        if (updatedCart[existingItemIndex].quantity > 1) {
          updatedCart[existingItemIndex].quantity -= 1;
        } else {
          updatedCart.splice(existingItemIndex, 1);
        }
        return updatedCart;
      }
      return prevCart;
    });
  };

  const placeOrder = () => {
    setCart([]);
  };

  return (
    <Router>
      <div className={`App ${theme}`}>
        <Header theme={theme} toggleTheme={toggleTheme} />
        <Routes>
          <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} placeOrder={placeOrder} />} />
          <Route path="/" element={<Main
            cart={cart}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
            placeOrder={placeOrder}
          />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />}/>
          <Route path="*" element={<RedirectToHome />} />
        </Routes>
        <Footer />
        <ToastContainer />
      </div>
    </Router>
  );
}
function RedirectToHome() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/');
  }, [navigate]);

  return null; 
}

export default App;
