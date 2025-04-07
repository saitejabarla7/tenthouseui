// // // src/components/Cart.js
// // const Cart = ({ cartItems, removeFromCart }) => {
// //     return (
// //       <div>
// //         <h2>Your Cart</h2>
// //         <ul style={{ listStyleType: 'none', padding: 0 }}>
// //           {cartItems.map(item => (
// //             <li key={item.id} style={cartItemStyle}>
// //               <h3>{item.name}</h3>
// //               <p>{item.description}</p>
// //               <button onClick={() => removeFromCart(item.id)}>Remove</button>
// //             </li>
// //           ))}
// //         </ul>
// //       </div>
// //     );
// //   };
  
// //   const cartItemStyle = {
// //     borderBottom: '1px solid #ddd',
// //     padding: '10px 0',
// //   };
  
// //   export default Cart;
  

// // src/pages/CartPage.js
// // import React from 'react';

// // const CartPage = ({ cart }) => {
// //   return (
// //     <div>
// //       <h2>Your Cart</h2>
// //       {cart.length === 0 ? (
// //         <p>Your cart is empty</p>
// //       ) : (
// //         <ul style={{ listStyleType: 'none', padding: 0 }}>
// //           {cart.map((product, index) => (
// //             <li key={index} style={cartItemStyle}>
// //               <img
// //                 src={product.image}
// //                 alt={product.name}
// //                 style={{ width: '50px', height: '50px', objectFit: 'cover' }}
// //               />
// //               <h4>{product.name}</h4>
// //               <p>{product.description}</p>
// //             </li>
// //           ))}
// //         </ul>
// //       )}
// //     </div>
// //   );
// // };

// // const cartItemStyle = {
// //   borderBottom: '1px solid #ddd',
// //   padding: '10px 0',
// //   display: 'flex',
// //   alignItems: 'center',
// //   gap: '20px',
// // };

// // export default CartPage;


// import React from 'react';

// const CartPage = ({ cart }) => {
//     return (
//       <div>
//         <h2>Your Cart</h2>
//         {cart?.length === 0 ? ( // ✅ Safe check with optional chaining
//           <p>Your cart is empty</p>
//         ) : (
//           <ul style={{ listStyleType: 'none', padding: 0 }}>
//             {cart?.map((product, index) => (
//               <li key={index} style={cartItemStyle}>
//                 <img
//                   src={product.image}
//                   alt={product.name}
//                   style={{ width: '50px', height: '50px', objectFit: 'cover' }}
//                 />
//                 <h4>{product.name}</h4>
//                 <p>{product.description}</p>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     );
//   };
  

// const cartItemStyle = {
//   borderBottom: '1px solid #ddd',
//   padding: '10px 0',
//   display: 'flex',
//   alignItems: 'center',
//   gap: '20px',
// };

// export default CartPage;



import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 2rem;
  background: white;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: #2c3e50;
  text-align: center;
  margin-bottom: 2rem;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background: linear-gradient(to right, #3498db, #2ecc71);
    border-radius: 2px;
  }
`;

const EmptyCart = styled.div`
  text-align: center;
  padding: 3rem;
  background: #f8f9fa;
  border-radius: 15px;
  
  p {
    color: #7f8c8d;
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
  }
`;

const CartList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const CartItem = styled.li`
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 2rem;
  padding: 1.5rem;
  margin-bottom: 1rem;
  background: #fff;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  }
`;

const ProductImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;

const ProductInfo = styled.div`
  h4 {
    font-size: 1.3rem;
    color: #2c3e50;
    margin-bottom: 0.5rem;
  }

  p {
    color: #7f8c8d;
    line-height: 1.6;
  }
`;

const PriceTag = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  color: #2ecc71;
`;

const RemoveButton = styled.button`
  padding: 0.5rem 1rem;
  background: #e74c3c;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #c0392b;
  }
`;

const CartSummary = styled.div`
  margin-top: 2rem;
  padding: 1.5rem;
  background: #f8f9fa;
  border-radius: 15px;
  text-align: right;

  p {
    font-size: 1.2rem;
    color: #2c3e50;
    margin-bottom: 1rem;
  }
`;

const CheckoutButton = styled.button`
  padding: 1rem 2rem;
  background: linear-gradient(to right, #3498db, #2ecc71);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.9;
  }
`;

const CartPage = ({ cart, removeFromCart }) => {
  const calculateTotal = () => {
    return cart?.reduce((total, item) => {
      const price = parseInt(item.price.split('/')[0]);
      return total + price;
    }, 0);
  };

  return (
    <Container>
      <Title>Your Shopping Cart</Title>
      {!cart?.length ? (
        <EmptyCart>
          <p>Your cart is empty</p>
          <CheckoutButton onClick={() => window.history.back()}>
            Continue Shopping
          </CheckoutButton>
        </EmptyCart>
      ) : (
        <>
          <CartList>
            {cart.map((product, index) => (
              <CartItem key={index}>
                <ProductImage src={product.image} alt={product.name} />
                <ProductInfo>
                  <h4>{product.name}</h4>
                  <p>{product.description}</p>
                </ProductInfo>
                <div>
                  <PriceTag>₹{product.price}</PriceTag>
                  <RemoveButton onClick={() => removeFromCart(index)}>
                    Remove
                  </RemoveButton>
                </div>
              </CartItem>
            ))}
          </CartList>
          <CartSummary>
            <p>Total: ₹{calculateTotal()}</p>
            <CheckoutButton>Proceed to Checkout</CheckoutButton>
          </CartSummary>
        </>
      )}
    </Container>
  );
};

export default CartPage;