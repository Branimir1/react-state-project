import React, { createContext, useContext, useReducer } from 'react';

// Define the initial state for the shopping cart
const initialState = {
  cartItems: [],
};

// Create the context
const ShoppingCartContext = createContext();

// Define the reducer function to handle state changes
const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    // Add more cases for other actions (e.g., remove from cart, update quantity, etc.)
    default:
      return state;
  }
};

// Create the context provider component
export const ShoppingCartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <ShoppingCartContext.Provider value={{ state, dispatch }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};

// Create a custom hook to use the context
export const useShoppingCart = () => {
  const context = useContext(ShoppingCartContext);
  if (!context) {
    throw new Error('useShoppingCart must be used within a ShoppingCartProvider');
  }
  return context;
};
