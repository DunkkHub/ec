import React, { createContext, useState, useEffect, useContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Create the context
const CartContext = createContext();

// Create a provider component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('cart');
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addItemToCart = (item) => {
    setCartItems(prevItems => [...prevItems, item]);
  };

  const removeItemFromCart = (itemToRemove) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== itemToRemove.id));
  };

  return (
    <CartContext.Provider value={{ cartItems, addItemToCart, removeItemFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Create a custom hook to use the context
export const useCart = () => useContext(CartContext);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<CartProvider><App /></CartProvider>);

