import { createContext, useReducer } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { cartReducer, initialState } from "../Reducers/CartReducers";

export const CartContext = createContext();

export function CartProvider({ children }) {

  const [state, dispatch] = useReducer(cartReducer, initialState)

  const totalPrice = state.cart.reduce(
    (acc, curr) => (acc += curr.price * curr.quantity),
    0
  );

  const cartNotify = () => toast.success("Added to Cart");
  const deleteNotify = () => toast.success("Item removed");

  return (
    <CartContext.Provider value={{ totalPrice, cartNotify, deleteNotify, state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}
