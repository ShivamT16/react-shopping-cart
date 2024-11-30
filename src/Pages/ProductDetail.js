import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import products from "../Data/products.json"
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import { ProductContext } from "../Contexts/ProductContext";
import { CartContext } from "../Contexts/CartContext";

export const ProductDetail = () => {
  const { cartNotify, state, dispatch } = useContext(CartContext);
  const { product, open, handleClose } = useContext(ProductContext);
  
  return (
    <div>
     <Modal open={open} onClose={handleClose} >
      <Box className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[450px] sm:w-[800px] md:w-[1300px]" >
      {products.data.filter(({ id }) => id === product).map((item) => {
          const { id, name, price, description, image } = item;
          return (
            <div>
              <div key={id} className="border border-[#514a9d] bg-[whitesmoke] rounded-2xl flex flex-wrap p-8 m-8 mx-16">
                
                  <img className="h-26 w-20 border border-[#24c6dc] rounded-2xl p-1 bg-white md:w-52" alt="product img" src={image} />
                <div>
                  <p className="text-lg font-medium">{name}</p>
                  <p>INR: {price}</p>
                </div>
                
                <div className="w-[40rem] text-justify p-0 m-0 md:p-2 m-4">
                  <p className="text-sm mb-0 md:mb-2 md:text-base"> {description} </p>

                {state.cart.find((element) => element.id === item.id) ? (
                <Link to="/cart" className="border-2 border-lime-600 px-2 rounded-lg bg-lime-500 hover:bg-[lightgray]">
                 Go to Cart
                </Link>
              ) : (
                <Link
                  className="border-2 border-[#514a9d] px-2 text-sm rounded-lg bg-white hover:bg-[lightgray]"
                  onClick={() => {
                    dispatch({type:"ADD_TO_CART", payload: item})
                    cartNotify();
                  }}
                >
                  Add to Cart
                </Link>
              )}

              <br />
               <button onClick={handleClose}
               className="border-2 border-slate-500 mt-1 px-2 text-sm rounded-lg bg-white hover:bg-[lightgray]"
               > Close </button>                  
                </div>
              </div>
            </div>
          );
        })}
        </Box>
      </Modal>
      <ToastContainer autoClose={2000} />
    </div>
  );
};