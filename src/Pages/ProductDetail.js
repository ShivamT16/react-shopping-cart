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
      <Box className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1400px]" >
      {products.data.filter(({ id }) => id === product).map((item) => {
          const { id, name, price, description, image } = item;
          return (
            <div className="detaill">
              <div key={id} className="border border-[#514a9d] bg-[whitesmoke] rounded-2xl flex flex-wrap p-8 m-8 mx-16">
                <div>
                  <img className="h-60 w-54 border border-[#24c6dc] rounded-2xl p-4 bg-white" alt="product img" src={image} />
                  <ul className="pname">{name}</ul>
                  <p>INR: {price}</p>
                </div>
                <div className="w-[50rem] text-justify p-6 m-4">
                  <p className="mb-2"> {description} </p>

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

              <br />
               <button onClick={handleClose}
               className="border-2 border-slate-500 mt-4 px-2.5 rounded-lg bg-white hover:bg-[lightgray]"
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