import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "./CartSlice";

const products = [
  {
    id: 1,
    name: "Snake Plant",
    price: 299,
    category: "Indoor Plants",
    image:
      "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee",
  },
  {
    id: 2,
    name: "Peace Lily",
    price: 399,
    category: "Indoor Plants",
    image:
      "https://images.unsplash.com/photo-1593482892290-f54927ae1bb6",
  },
  {
    id: 3,
    name: "Aloe Vera",
    price: 199,
    category: "Succulents",
    image:
      "https://images.unsplash.com/photo-1509423350716-97f9360b4e09",
  },
  {
    id: 4,
    name: "Money Plant",
    price: 249,
    category: "Indoor Plants",
    image:
      "https://images.unsplash.com/photo-1614594975525-e45190c55d0b",
  },
  {
    id: 5,
    name: "Rubber Plant",
    price: 499,
    category: "Outdoor Plants",
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
  },
  {
    id: 6,
    name: "Succulent",
    price: 149,
    category: "Succulents",
    image:
      "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a",
  },
];

function ProductList() {
  const dispatch = useDispatch();

  return (
    <div className="product-page">
      <h1>Our Plants</h1>

      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />

            <h2>{product.name}</h2>

            <p>Category: {product.category}</p>

            <p>Price: ₹{product.price}</p>

            <button
              onClick={() => dispatch(addItem(product))}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
