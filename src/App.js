import { Routes, Route } from "react-router-dom";

import { Home } from "./Pages/Home";
import { Product } from "./Pages/Products";
import { CategoryWise } from "./Pages/CategoryWise";
import { Navbar } from "./Navbar";
import { Cart } from "./Pages/Cart";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/cart" element={<Cart /> } />
        <Route path="/category" element={<CategoryWise />} />
      </Routes>
    </div>
  );
}

export default App;
