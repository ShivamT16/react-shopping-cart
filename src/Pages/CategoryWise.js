import { useContext } from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import products from "../Data/products.json"
import { ProductContext } from "../Contexts/ProductContext";
import { CartContext } from "../Contexts/CartContext";
import { ProductDetail } from "./ProductDetail";

export const CategoryWise = () => {
  const { cartNotify, state, dispatch } = useContext(CartContext);
  const { handleProduct, productCategory, handleOpen } = useContext(ProductContext);
 
  return (
    <div className="bg-[whitesmoke] mt-16 flex flex-wrap gap-4 pb-20 pt-8 items-center justify-center">
      {products.data.filter(({ category }) => category === productCategory)
        .map((item) => {
          const { id, name, price, image } = item;

          return (
            <div
              key={id}
              className="border-[1.9px] border-[#514a9d] p-4 rounded-[20px]"
              onClick={() => handleProduct(id)}
            >
              <div>
                <img className="h-64 w-60 border border-[#24c6dc] rounded-2xl p-4 bg-white" alt="product img" src={image} />
                <ul>{name} </ul>
                <p> INR: {price}</p>
              </div>
              {state.cart.find((element) => element.id === item.id) ? (
                <Link to="/cart" className="border-2 border-[#514a9d] px-2.5 rounded-lg bg-white hover:bg-[lightgray]">
                 Go to Cart
                </Link>
              ) : (
                <Link
                  className="border-2 border-[#514a9d] px-2.5 rounded-lg bg-white hover:bg-[lightgray]"
                  onClick={() => {
                    dispatch({type:"ADD_TO_CART", payload: item})
                    cartNotify();
                  }}
                >
                  Add to Cart
                </Link>
              )}
             <Link className="border-2 border-[#514a9d] mx-2 py-0.5 px-1 rounded-lg bg-white hover:bg-[lightgray]" onClick={() => {handleProduct(id); handleOpen()}} > View Details </Link>
              
            </div>
          );
        })}
        <ProductDetail />
        <ToastContainer autoClose={1500} />
    </div>
  );
};
