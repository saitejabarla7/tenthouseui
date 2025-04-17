import React from 'react';

const CartPage = ({ cart = [], removeFromCart }) => {  // ✅ Default value
  return (
    <div>
      <h2>Your Cart</h2>
      {cart?.length === 0 ? ( // ✅ Safe check with optional chaining
        <p>Your cart is empty</p>
      ) : (
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {cart.map((product, index) => (
            <li key={index} style={cartItemStyle}>
              <img
                src={product.image}
                alt={product.name}
                style={{ width: '50px', height: '50px', objectFit: 'cover' }}
              />
              <h4>{product.name}</h4>
              <p>{product.description}</p>
              <button onClick={() => removeFromCart(product.id)}>Remove from Cart</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const cartItemStyle = {
  borderBottom: '1px solid #ddd',
  padding: '10px 0',
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
};

export default CartPage;
