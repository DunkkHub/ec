import React, { useState } from 'react';

const ProductList = ({ products }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const filteredProducts = products.filter(p =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input 
        type="text" 
        onChange={(e) => setSearchTerm(e.target.value)} 
        placeholder="Search products..."
      />

      {/* Display products here */}
      <ul>
        {filteredProducts.map(product => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;