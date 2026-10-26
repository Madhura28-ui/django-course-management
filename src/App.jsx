import React, { useState } from "react";
import "./app.css";
import ProductList from "./ProductList";

function App() {
const [showProductList, setShowProductList] = useState(false);

return ( <div className="app-container">
{!showProductList ? ( <div className="background-image"> <div className="landing-content"> <h1>Welcome to Paradise Nursery</h1>

```
        <p>Discover beautiful plants for your home.</p>

        <button
          className="get-started-btn"
          onClick={() => setShowProductList(true)}
        >
          Get Started
        </button>
      </div>
    </div>
  ) : (
    <ProductList />
  )}
</div>
```

);
}

export default App;
