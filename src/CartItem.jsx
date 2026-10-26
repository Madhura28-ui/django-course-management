import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeItem,
  updateQuantity
} from "./CartSlice";

function CartItem({ onContinueShopping }) {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart.items);

  const handleIncrement = (item) => {
    dispatch(
      updateQuantity({
        name: item.name,
        quantity: item.quantity + 1
      })
    );
  };

  const handleDecrement = (item) => {
    dispatch(
      updateQuantity({
        name: item.name,
        quantity: item.quantity - 1
      })
    );
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  const totalAmount = cart.reduce(
    (total, item) => total + item.cost * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <h1>Shopping Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart">
          {cart.map((item) => (
            <div className="cart-item" key={item.name}>
              <img
                src={item.image}
                alt={item.name}
                width="120"
                height="120"
                style={{ objectFit: "cover" }}
              />

              <div>
                <h2>{item.name}</h2>

                <p>Unit Price: ₹{item.cost}</p>

                <p>
                  Subtotal: ₹{item.cost * item.quantity}
                </p>

                <button onClick={() => handleDecrement(item)}>
                  -
                </button>

                <span> {item.quantity} </span>

                <button onClick={() => handleIncrement(item)}>
                  +
                </button>

                <button
                  className="delete-button"
                  onClick={() => handleRemove(item)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <h2>Total Amount: ₹{totalAmount}</h2>

      <button
        onClick={() => window.alert("Checkout Coming Soon!")}
      >
        Checkout
      </button>

      <button
        onClick={() => {
          if (onContinueShopping) {
            onContinueShopping();
          }
        }}
      >
        Continue Shopping
      </button>
    </div>
  );
}

export default CartItem;
