export const initialState = {
    cart: [],
}

export const cartReducer = (state, action) => {
    switch (action.type) {

    case "ADD_TO_CART": {
    const findProduct = state.cart.find((element) => element.id === action.payload.id);
     
    if (findProduct) {
        state.cart.map((cartItem) => {
          if (cartItem.id === action.payload.id) {
            return { ...state, cart: [...cartItem, {quantity: cartItem.quantity + 1}]};
          } 
          else {
            return {...state, cart: [...cartItem] } ;
          }
        })} 
      else {
      return {...state, cart: [...state.cart, { ...action.payload, quantity: 1 }] } ;
    } };

    case "REMOVE_FROM_CART":  
     return {...state, cart: state.cart.filter(({ id }) => id !== action.payload) }; 

    case "INCREASE_QUANTITY":
     return { ...state, cart: [...state.cart].map((element) =>
      element.id === action.payload.id
        ? { ...element, quantity: element.quantity + 1 }
        : element ) };
    
    case "DECREASE_QUANTITY":
        return { ...state, cart: [...state.cart].map((element) =>
            element.id === action.payload.id
              ? { ...element, quantity: element.quantity - 1 }
              : element ) };

       default: 
        return state;
    };
  }