import React, { createContext, useContext, useReducer } from 'react';

// Define the initial state for the shopping cart
const initialState = {
  cartItems: [],
};

// Create the context
const ShoppingCartContext = createContext();

const getTotalQuantity = (cartItems) => {
  return cartItems.reduce((total, item) => total + item.quantity, 0);
};

// Define the reducer function to handle state changes
const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    case 'UPDATE_QUANTITY':
      const updatedCartItems = state.cartItems.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity + action.payload.quantity }
          : item
      );
      // Filter out items with quantity 0 (or less)
      const filteredCartItems = updatedCartItems.filter((item) => item.quantity > 0);
      return {
        ...state,
        cartItems: filteredCartItems,
      }
//ovo ne koristim zasad
      case 'SET_SUCCESS_MESSAGE':
      return {
        ...state,
        showSuccessMessage: true,
      };

    case 'RESET_SUCCESS_MESSAGE':
      return {
        ...state,
        showSuccessMessage: false,
      };


    // Add more cases for other actions (e.g., remove from cart, update quantity, etc.)
    // add remove from cart
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
  return {
    ...context,
    getTotalQuantity: () => getTotalQuantity(context.state.cartItems),
  };
};
