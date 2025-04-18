import React from 'react';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <div>
        {/* Your routes/components */}
        <h1>Hello from App!</h1>
      </div>
    </CartProvider>
  );
}

export default App;
