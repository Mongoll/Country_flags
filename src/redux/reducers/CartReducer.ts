import {
  ADD_COUNTRY_TO_CART,
  REMOVE_COUNTRY_FROM_CART,
  CartActions,
  CartState,
} from "../../types";
//initial state

const cartFromLocal = localStorage.getItem("cart");
let initialCart: [] = [];
if (cartFromLocal) {
  initialCart = JSON.parse(cartFromLocal);
}
const initState: CartState = {
  cart: initialCart,
};

//cart reducer function
export default function cartReducer(
  state: CartState = initState,
  action: CartActions
): CartState {
  switch (action.type) {
    //adding country to cart
    case ADD_COUNTRY_TO_CART: {
      const country = action.payload;
      //save cart country to localstorage
      const cartCountry = [...state.cart, country];
      localStorage.setItem("cart", JSON.stringify(cartCountry));
      return {
        ...state,
        cart: [...state.cart, country],
      };
    }
    case REMOVE_COUNTRY_FROM_CART: {
      const paylodCountry = action.payload;
      const tempCart = state.cart.filter(
        (country) => country.name !== paylodCountry.name
      );
      //save cart country to localstorage
      const cartCountry = [...tempCart];
      localStorage.setItem("cart", JSON.stringify(cartCountry));
      return {
        ...state,
        cart: [...tempCart],
      };
    }
    default:
      return state;
  }
}
