import { createContext, useContext, useReducer, useEffect } from "react";
import reducer from "./reducer";
import cartItems from "./data";
import {
  DISPLAY_ITEMS,
  LOADING,
  INCREASE,
  DECREASE,
  REMOVE,
  CLEAR_CART,
} from "./actions";
import { getTotals } from "./utils";

const url = "https://www.course-api.com/react-useReducer-cart-project";

const AppContext = createContext();

//initial values for state, stored as object for ease of use.
const initialState = {
  loading: false,
  //========*converts cartItems(array) into map*====
  cart: new Map(),
};
export const AppProvider = ({ children }) => {
  //initialising a useReducer by passing in the initial state and a reducer.
  const [state, dispatch] = useReducer(reducer, initialState);

  const { totalAmount, totalCost } = getTotals(state.cart);
  //empties the cart
  const clearCart = () => {
    //calls the dispatch, sets the key to the function to be used
    dispatch({ type: CLEAR_CART });
  };

  const remove = (id) => {
    dispatch({ type: REMOVE, payload: { id } });
  };

  const increase = (id) => {
    dispatch({ type: INCREASE, payload: { id } });
  };

  const decrease = (id) => {
    dispatch({ type: DECREASE, payload: { id } });
  };

  const fetchData = async () => {
    dispatch({ type: LOADING });
    const response = await fetch(url);
    const cart = await response.json();
    dispatch({ type: DISPLAY_ITEMS, payload: { cart } });
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    //pass the entire state as value to the context so that it can be used globally.
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        remove,
        increase,
        decrease,
        totalAmount,
        totalCost,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
