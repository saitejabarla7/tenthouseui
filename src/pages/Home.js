// src/pages/Home.js
import Banner from '../components/Banner';
import SupplierList from '../components/SupplierList';
import ProductList from '../components/ProductList';
import { useState } from 'react';
import Cart from '../components/Cart';

const Home = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  return (
    <div>
      <Banner />
      <div style={{ display: 'flex' }}>
        <div style={{ flex: 2, marginLeft: '350px' }}>
          <SupplierList />
        </div>
        <div style={{ flex: 2 }}>
          <ProductList addToCart={addToCart} />
        </div>
      </div>
      <Cart cartItems={cart} removeFromCart={removeFromCart} />
    </div>
  );
};

export default Home;
