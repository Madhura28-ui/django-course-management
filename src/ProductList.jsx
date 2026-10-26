import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./CartSlice";
import CartItem from "./CartItem";

const plantsArray = [
{
category: "Air Purifying Plants",
plants: [
{ name: "Snake Plant", cost: 299, image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee" },
{ name: "Peace Lily", cost: 399, image: "https://images.unsplash.com/photo-1593482892290-f54927ae1bb6" },
{ name: "Spider Plant", cost: 249, image: "https://images.unsplash.com/photo-1572688484438-313a6e50c333" },
{ name: "Areca Palm", cost: 499, image: "https://images.unsplash.com/photo-1512428813834-c702c7702b78" },
{ name: "Rubber Plant", cost: 450, image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6" },
{ name: "Boston Fern", cost: 350, image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e" }
]
},
{
category: "Aromatic Plants",
plants: [
{ name: "Lavender", cost: 299, image: "https://images.unsplash.com/photo-1499002238440-d264edd596ec" },
{ name: "Jasmine", cost: 199, image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946" },
{ name: "Rosemary", cost: 249, image: "https://images.unsplash.com/photo-1515586000433-45406d8e6662" },
{ name: "Mint", cost: 99, image: "https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1" },
{ name: "Basil", cost: 149, image: "https://images.unsplash.com/photo-1618375569909-3c8616cf7733" },
{ name: "Lemongrass", cost: 179, image: "https://images.unsplash.com/photo-1530968464165-7a1861cbaf9f" }
]
},
{
category: "Low Maintenance Plants",
plants: [
{ name: "Aloe Vera", cost: 199, image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09" },
{ name: "ZZ Plant", cost: 399, image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b" },
{ name: "Jade Plant", cost: 199, image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a" },
{ name: "Pothos", cost: 249, image: "https://images.unsplash.com/photo-1616763355548-1b606f439f86" },
{ name: "Cactus", cost: 149, image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09" },
{ name: "Succulent", cost: 129, image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a" }
]
}
];

function Navbar({ page, setPage, cartQuantity }) {
return ( <nav className="navbar"> <h2>Paradise Nursery</h2>

```
  <div>
    <a href="#home" onClick={(e) => { e.preventDefault(); setPage("home"); }}>
      Home
    </a>

    <a href="#plants" onClick={(e) => { e.preventDefault(); setPage("plants"); }}>
      Plants
    </a>

    <a href="#cart" onClick={(e) => { e.preventDefault(); setPage("cart"); }}>
      🛒 Cart ({cartQuantity})
    </a>
  </div>
</nav>
```

);
}

function ProductList() {
const dispatch = useDispatch();
const cart = useSelector((state) => state.cart.items);

const [addedToCart, setAddedToCart] = useState({});
const [page, setPage] = useState("plants");

const cartQuantity = cart.reduce(
(total, item) => total + item.quantity,
0
);

const handleAddToCart = (plant) => {
dispatch(
addItem({
...plant,
id: plant.name,
price: plant.cost
})
);

```
setAddedToCart((previous) => ({
  ...previous,
  [plant.name]: true
}));
```

};

return ( <div> <Navbar
     page={page}
     setPage={setPage}
     cartQuantity={cartQuantity}
   />

```
  {page === "home" && (
    <div className="app-container">
      <h1>Welcome to Paradise Nursery</h1>
      <button onClick={() => setPage("plants")}>
        Get Started
      </button>
    </div>
  )}

  {page === "plants" && (
    <div>
      <h1>Our Plants</h1>

      {plantsArray.map((category) => (
        <section key={category.category}>
          <h2>{category.category}</h2>

          <div className="product-grid">
            {category.plants.map((plant) => (
              <div className="product-card" key={plant.name}>
                <img
                  className="product-image"
                  src={plant.image}
                  alt={plant.name}
                />

                <h3>{plant.name}</h3>
                <p>Price: ₹{plant.cost}</p>

                <button
                  disabled={!!addedToCart[plant.name]}
                  onClick={() => handleAddToCart(plant)}
                >
                  {addedToCart[plant.name]
                    ? "Added to Cart"
                    : "Add to Cart"}
                </button>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  )}

  {page === "cart" && (
    <CartItem onContinueShopping={() => setPage("plants")} />
  )}
</div>
```

);
}

export default ProductList;
