import React from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaTrashAlt } from 'react-icons/fa';
import "./Cart.css";

function Cart({ cart, removeFromCart, placeOrder }) {
  const notify = (message) => toast(message);

  const handleRemove = (id) => {
    removeFromCart(id);
    notify("Item removed from cart!");
  };
  const handlePlaceOrder = () => {
    placeOrder();
    notify("Order placed successfully!");
  };

  return (
    
    <section id="cart" className="cart">
      <ToastContainer />
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cart.map((cake, index) => (
            <li key={index} className="cart-item">
              <img src={`${process.env.PUBLIC_URL}/images/${cake.img}`} alt={cake.name} className="cart-item-image" />
              <div className="cart-item-details">
                <span>{cake.name}</span>
                <span>${cake.price} x {cake.quantity}</span>
              </div>
              
              <button className="remove-btn" onClick={() => handleRemove(cake.id)}>
                <FaTrashAlt />
              </button>
            </li>
          ))}
        </ul>
      )}
      
      
      {cart.length > 0 && <button onClick={handlePlaceOrder} className="order-btn">Place Order</button>}
   
    </section>
    
  );
}

export default Cart;
