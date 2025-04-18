import React, { useState, useEffect } from 'react';
import { debounce } from 'lodash';

const Search = ({ products, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = debounce((term) => {
    const filteredProducts = products.filter(product =>
      product.name.toLowerCase().includes(term.toLowerCase())
    );
    onSearch(filteredProducts);
  }, 300);

  const handleChange = (event) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
    handleSearch(newSearchTerm);
  };
  
  useEffect(() => {
    return () => {
        handleSearch.cancel();
    };
  }, []);

  return (
    <input
      type="text"
      placeholder="Search products..."
      value={searchTerm}
      onChange={handleChange}
    />
  );
};

export default Search;