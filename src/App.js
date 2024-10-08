import React, { useState,useEffect} from "react";
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
  const setMode =()=>{
    return JSON.parse(localStorage.getItem('mode')) || false ;
  }
  const [cart, setCart] = useState([]);
  const [theme, setTheme] = useState(setMode());
  useEffect(() => {
    localStorage.setItem('mode',JSON.stringify(theme));
  }, [theme])
  


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
      <div className={theme ?"App dark":"App false"}>
        <Header Theme={{theme,setTheme}} />
        <Routes>
          <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} placeOrder={placeOrder} />} />
          <Route path="/" element={<Main
            cart={cart}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
            placeOrder={placeOrder}
          />} />
          <Route path="/about" element={<About theme={theme} />} />
          <Route path="/login" element={<Login theme={theme} />}/>
        </Routes>
        <Footer Theme={theme} />
        <ToastContainer />
      </div>
    </Router>
  );
}


export default App;
