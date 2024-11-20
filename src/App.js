import { Routes, Route } from "react-router-dom";

import { Home } from "./Pages/Home";
import { Product } from "./Pages/Products";
import { CategoryWise } from "./Pages/CategoryWise";
import { ProductDetail } from "./Pages/ProductDetail";
import { Navbar } from "./Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/productDetail" element={<ProductDetail />} />
        {/* <Route path="/cart" element={ <RequiresAuth> <Cart /> </RequiresAuth> } /> */}
        {/* <Route path="/wishList" element={ <RequiresAuth> <WishList /> </RequiresAuth> } /> */}
        {/* <Route path="/signup" element={<SignUp />} /> */}
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/address" element={<Addresses />} /> */}
        {/* <Route path="/checkout" element={<Checkout />} /> */}
        <Route path="/category" element={<CategoryWise />} />
      </Routes>
    </div>
  );
}

export default App;
