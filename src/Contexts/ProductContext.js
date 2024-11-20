import { createContext, useState } from "react";

export const ProductContext = createContext();

export function ProductProvider({ children }) {

  const [product, setProduct] = useState();
  const [productCategory, setProductCategory] = useState();

  const handleProduct = (item) => {
    setProduct((product) => item);
  };

  const handleCategory = (item) => {
    setProductCategory((productCategory) => item.toLowerCase());
  };

  return (
    <ProductContext.Provider value={{ product, handleProduct, productCategory, handleCategory }} >
      {children}
    </ProductContext.Provider>
  );
}
