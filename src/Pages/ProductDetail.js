import { useContext } from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import products from "../Data/products.json"

import { ProductContext } from "../Contexts/ProductContext";
import { CartContext } from "../Contexts/CartContext";

export const ProductDetail = () => {
  const { cartNotify, state, dispatch } = useContext(CartContext);
  const { product } = useContext(ProductContext);
  
  return (
    <div>
      {products.data
        .filter(({ id }) => id === product)
        .map((item) => {
          const { id, name, price, description, image } = item;
          return (
            <div className="detaill">
              <div key={id} className="border border-[#514a9d] bg-[whitesmoke] rounded-2xl flex flex-wrap p-8 m-8 mx-16">
                <div className="">
                  <img className="h-64 w-60 border border-[#24c6dc] rounded-2xl p-4 bg-white" alt="product img" src={image} />
                  <ul className="pname">{name}</ul>
                  <p>INR: {price}</p>
                </div>
                <div className="w-[50rem] text-justify p-6 m-4">
                  <p> {description} </p>

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
                  
                </div>
              </div>
            </div>
          );
        })}
      <ToastContainer autoClose={2000} />
    </div>
  );
};
