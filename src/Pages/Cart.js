import { useContext } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { CartContext } from "../Contexts/CartContext";

export const Cart = () => {
  const { totalPrice, deleteNotify, state, dispatch } = useContext(CartContext);
  const notify = () => toast.success("Order Placed");

  return (
    <div>
      <div className="flex flex-wrap gap-[5rem] text-[2rem] font-bold m-4 items-center justify-around">
        <p> Total Item In The Cart - {state.cart.length} </p>
        <p>Total price-  ₹ {totalPrice}</p>
        <Link >
          {state.cart.length > 0 && 
          <button onClick={notify} className="px-8 py-1 text-xl text-blue-600 border-2 rounded">Next</button>}
        </Link>
      </div>
      <div className="bg-whitesmoke flex flex-wrap gap-4 items-center justify-center p-4">
        {state.cart.length > 0 ? (
          state.cart.map((item) => {
            const { id, name, price, image, quantity } = item;

            return (
              <div key={id} className="border border-[#514a9d] p-4 rounded-[20px]">
                <img className="h-[12rem] w-[11rem] border-[1.5px] border-[#24c6dc] rounded-[2rem] p-4" alt="product img" src={image} />
                <ul>{name}</ul>
                <ul>INR:{price}</ul>
                <div>
                { quantity === 1 ? 
                 <button className="border-2 border-[#514a9d] px-2 mx-1 rounded-lg bg-white hover:bg-[lightgray]"
                    onClick={() => {
                        deleteNotify();
                        dispatch({type: "REMOVE_FROM_CART", payload: id})
                    }}
                 > - </button> :
                 <button
                  className="border-2 border-[#514a9d] px-2 mx-1 rounded-lg bg-white hover:bg-[lightgray]"
                    onClick={() => 
                      dispatch({type: "DECREASE_QUANTITY", payload: item})
                    }
                  > - </button> }
                  {quantity}
                  <button
                  className="border-2 border-[#514a9d] px-2 mx-1 rounded-lg bg-white hover:bg-[lightgray]"
                    type="button"
                    onClick={() => 
                      dispatch({type: "INCREASE_QUANTITY", payload: item})
                    }
                  >
                    +
                  </button>
                </div>

                <button
                className="border-2 border-[#514a9d] px-2 my-2 rounded-lg bg-white hover:bg-[lightgray]"
                  onClick={() => {
                    deleteNotify();
                    dispatch({type: "REMOVE_FROM_CART", payload: id})
                  }}
                >
                  Remove
                </button>

              </div>
            );
          })
        ) : (
          <p className="text-2xl">
            Cart is Empty, please
            <Link className="text-blue-500 font-bold text-2xl" to="/product">
              "Explore"
            </Link>{" "}
          </p>
        )}
      </div>
      <Link>
        {state.cart.length > 2 && <button onClick={notify} className="px-8 py-1 text-xl text-blue-600 border-2 rounded">Next</button>}
      </Link>
      <ToastContainer autoClose={2000} />
    </div>
  );
};
