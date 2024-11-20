import { useContext } from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import products from "../Data/products.json"
import { ProductContext } from "../Contexts/ProductContext";
import { CartContext } from "../Contexts/CartContext";

export const CategoryWise = () => {
  const { cartNotify, state, dispatch } = useContext(CartContext);
  const { handleProduct, productCategory } = useContext(ProductContext);
 
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
              <Link className="link" to="/productDetail">
                <img className="h-64 w-60 border border-[#24c6dc] rounded-2xl p-4 bg-white" alt="product img" src={image} />
                <ul>{name} </ul>
                <p> INR: {price}</p>
              </Link>
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
          );
        })}

        <ToastContainer autoClose={1500} />
    </div>
  );
};
