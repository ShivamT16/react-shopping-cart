import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const ProductContext = createContext();

export function ProductProvider({ children }) {
  
  // const navigate = useNavigate()
  const [product, setProduct] = useState();
  const [productCategory, setProductCategory] = useState();
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleProduct = (item) => {
    setProduct((product) => item);
  };

  const handleCategory = (item) => {
    setProductCategory((productCategory) => item.toLowerCase());
  };

  return (
    <ProductContext.Provider value={{ product, handleProduct, productCategory, handleCategory, open, handleOpen, handleClose }} >
      {children}
    </ProductContext.Provider>
  );
}
