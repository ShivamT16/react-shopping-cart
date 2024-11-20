import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
// import { ToastContainer } from "react-toastify";
import products from "../Data/products.json"
import { ProductContext } from "../Contexts/ProductContext";

// import { CartContext, WishListContext, ProductContext } from "..";

export const CategoryWise = () => {
  // const { cartNotify, state, dispatch } = useContext(CartContext);
  // const { handleWishListUpdate, wishListNotify } = useContext(WishListContext);
  const { handleProduct, productCategory } = useContext(ProductContext);
//  console.log(products.data)
 
  return (
    <div className="bg-[whitesmoke] h-screen flex flex-wrap gap-4 pb-20 pt-8 items-center justify-center">
      {products.data.filter(({ category }) => category === productCategory)
        .map((item) => {
          const { id, name, price, image } = item;

          return (
            <div
              key={id}
              className="border-[1.9px] border-[#514a9d] p-4 rounded-[20px]"
              onClick={() => handleProduct(id)}
            >
              <Link className="link" to="/productDetail">
                <img className="h-64 w-60 border border-[#24c6dc] rounded-2xl p-4 bg-white" alt="product img" src={image} />
                <ul>{name} </ul>
                <p> INR: {price}</p>
              </Link>
              {/* {state.cart.find((element) => element.id === item.id) ? (
                <NavLink to="/cart">
                  <button> Go to Cart</button>
                </NavLink>
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
              <button
                onClick={() => {
                  handleWishListUpdate(item);
                  wishListNotify();
                }}
              >
                Add to Favourite
              </button> */}
              
            </div>
          );
        })}

        {/* <ToastContainer autoClose={1500} /> */}
    </div>
  );
};
