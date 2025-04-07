// src/pages/ProductListPage.js
import React from 'react';
import ProductList from '../components/ProductList';

const ProductListPage = ({ addToCart }) => {
  return (
    <div>
      <h2>Product List</h2>
      <ProductList addToCart={addToCart} />  {/* Pass addToCart prop here */}
    </div>
  );
};

export default ProductListPage;
