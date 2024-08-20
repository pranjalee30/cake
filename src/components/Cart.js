import React from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
            <li key={index}>
              {cake.name} - ${cake.price} x {cake.quantity}
              <button onClick={() => handleRemove(cake.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      {cart.length > 0 && <button onClick={handlePlaceOrder}>Order</button>}
    </section>
  );
}

export default Cart;
