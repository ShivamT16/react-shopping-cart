import { Routes, Route } from "react-router-dom";

import { Home } from "./Pages/Home";
import { Product } from "./Pages/Products";

function App() {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        {/* <Route path="/productDetail" element={<ProductDetail products={DataBase} />} /> */}
        {/* <Route path="/cart" element={ <RequiresAuth> <Cart /> </RequiresAuth> } /> */}
        {/* <Route path="/wishList" element={ <RequiresAuth> <WishList /> </RequiresAuth> } /> */}
        {/* <Route path="/signup" element={<SignUp />} /> */}
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/address" element={<Addresses />} /> */}
        {/* <Route path="/checkout" element={<Checkout />} /> */}
        {/* <Route path="/category" element={<CategoryWise products={DataBase} />} /> */}
      </Routes>
    </div>
  );
}

export default App;
