// // // src/App.js
// // import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { Routes, Route } from 'react-router-dom';

// import Header from './components/Header';
// import Sidebar from './components/sidebar';
// import Home from './pages/Home';
// import CartPage from './pages/CartPage';
// import QRCodePage from './pages/QRCodePage';
// import { BrowserRouter as Router } from 'react-router-dom';
// import About from './components/About'; // Import the About component




// const App = () => {
//   return (
//     <Router>
//       <div style={{ display: 'flex' }}>
//         <Sidebar />
//         <div style={{ flex: 1, padding: '20px' }}>
//           <Header />
//           <Routes>
//   <Route path="/" element={<Home />} />
//   <Route path="/about" element={<About />} />
//   <Route path="/cart" element={<CartPage />} />
//   <Route path="/qr" element={<QRCodePage />} />
//   <Route path="/about" element={<About />} />  {/* About route */}

// </Routes>

//         </div>
//       </div>
//     </Router>
//   );
// };

// export default App;


// src/App.js
import React, { useState } from 'react'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importing only the necessary parts
import Header from './components/Header';
import Sidebar from './components/sidebar';
import Home from './pages/Home';
import CartPage from './pages/CartPage';
import QRCodePage from './pages/QRCodePage';
import About from './components/About'; // Import the About component
import ProductListPage from './pages/ProductListPage'; // Import Product List Page


const App = () => {
  // const [cart, setCart] = useState([]);

  // const addToCart = (product) => {
  //   setCart([...cart, product]);
  // };
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div style={{ flex: 1, padding: '20px' }}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/qr" element={<QRCodePage />} />
            <Route path="/products" element={<ProductListPage />} />

          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
