// // // src/components/ProductList.js
// // import { useState, useEffect } from 'react';
// // import axios from 'axios';

// // const ProductList = ({ addToCart }) => {
// //   const [products, setProducts] = useState([]);

// //   useEffect(() => {
// //     // Fetch products from your backend API
// //     axios.get('http://localhost:3001/products')
// //       .then(response => setProducts(response.data))
// //       .catch(error => console.error(error));
// //   }, []);

// //   return (
// //     <div>
// //       <h2>Available Products</h2>
// //       <ul style={{ listStyleType: 'none', padding: 0 }}>
// //         {products.map(product => (
// //           <li key={product.id} style={productStyle}>
// //             <h3>{product.name}</h3>
// //             <p>{product.description}</p>
// //             <button onClick={() => addToCart(product)}>Add to Cart</button>
// //           </li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // };

// // const productStyle = {
// //   borderBottom: '1px solid #ddd',
// //   padding: '10px 0',
// // };

// // export default ProductList;

// // src/components/ProductList.js
// import { useState, useEffect } from 'react';
// import axios from 'axios';

// const ProductList = ({ addToCart }) => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     // Fetch products from your backend API
//     axios.get('http://localhost:3001/products')
//       .then(response => setProducts(response.data))
//       .catch(error => console.error(error));
//   }, []);

//   return (
//     <div>
//       <h2>Available Products</h2>
//       <ul style={{ listStyleType: 'none', padding: 0 }}>
//         {products.map(product => (
//           <li key={product.id} style={productStyle}>
//             {/* Display product image */}
//             <img 
//               src={product.image} 
//               alt={product.name} 
//               style={{ width: '150px', height: '150px', objectFit: 'cover' }} 
//             />
//             <h3>{product.name}</h3>
//             <p>{product.description}</p>
//             <button onClick={() => addToCart(product)}>Add to Cart</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// const productStyle = {
//   borderBottom: '1px solid #ddd',
//   padding: '10px 0',
//   display: 'flex',
//   alignItems: 'center',
//   gap: '20px',
// };

// export default ProductList;


// src/components/ProductList.js
import { useState, useEffect } from 'react';

// Static data (mock products)
const mockProducts = [
  {
    id: 1,
    name: "Tent",
    description: "Available based on your choice (length 20m, 30m, round tent)",
    image: "https://5.imimg.com/data5/PX/IH/CA/SELLER-5571160/shamiyana-tent-1000x1000.jpg",
    price: "300/day"
  },
  {
    id: 2,
    name: "Vessels/Pateela",
    description: "Available in 5kgs-200kgs sizes",
    image: "https://bharattenthouse.com/products/th_49_jk-top-copy-500x500.jpg",
    price: "500/day"
  },
  {
    id: 3,
    name: "Chair",
    description: "Depending on how many people attend your event, add chairs.",
    image: "https://images.jdmagicbox.com/quickquotes/images_main/pvc-chair-2220145624-pim5fka7.jpg",
    price: "50/day"
  }
];

const ProductList = ({ addToCart }) => {
  const [products, setProducts] = useState(mockProducts);

  useEffect(() => {
    // Mocking the fetch data for now
    setProducts(mockProducts);
  }, []);

  if (!products.length) {
    return <p>Loading products...</p>;
  }

  return (
    <div>
      <h2>Available Products</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {products.map(product => (
          <li key={product.id} style={productStyle}>
            <img
              src={product.image}
              alt={product.name}
              style={{ width: '150px', height: '150px', objectFit: 'cover' }}
            />
            <div style={{ flex: 1 }}>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p><strong>Price: {product.price}</strong></p>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Add some basic styling
const productStyle = {
  borderBottom: '1px solid #ddd',
  padding: '10px 0',
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
  marginLeft: '500px' // Previously 500px, now shifted 200px more to the right
};

export default ProductList;


