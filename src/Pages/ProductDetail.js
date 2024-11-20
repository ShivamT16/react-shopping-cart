import { useContext } from "react";
import { Link } from "react-router-dom";
// import { ToastContainer } from "react-toastify";
import products from "../Data/products.json"

import { ProductContext } from "../Contexts/ProductContext";

// import { CartContext, WishListContext, ProductContext } from "..";

export const ProductDetail = () => {
  // const { cartNotify, deleteNotify, state, dispatch } = useContext(CartContext);
  // const { wishListNotify,states, dispatchs } = useContext(WishListContext);
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

                  {/* {state.cart.find((element) => element.id === item.id) ? (
                    <Link to="/cart">
                      <button> Go to Cart</button>
                    </Link>
                  ) : (
                    <button
                      onClick={() => {
                        cartNotify();
                        dispatch({type:"ADD_TO_CART", payload: item})
                      }}
                    >
                      Add to Cart
                    </button>
                  )}
                  {states.wishlist.find((element) => element.id === item.id) ? (
                <button
                  onClick={() => {
                    dispatchs({type:"REMOVE_FROM_WISHLIST", payload: id})
                    deleteNotify();
                  }}
                >
                  Remove from Favourite
                </button>
              ) : (
                <button
                  onClick={() => {
                    dispatchs({type:"ADD_TO_WISHLIST", payload: item})
                    wishListNotify();
                  }}
                >
                  Add to Favourite
                </button>
              )} */}
                </div>
              </div>
            </div>
          );
        })}
      {/* <ToastContainer autoClose={2000} /> */}
    </div>
  );
};
