// // // // src/App.js
// // // import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// // import { Routes, Route } from 'react-router-dom';

// // import Header from './components/Header';
// // import Sidebar from './components/sidebar';
// // import Home from './pages/Home';
// // import CartPage from './pages/CartPage';
// // import QRCodePage from './pages/QRCodePage';
// // import { BrowserRouter as Router } from 'react-router-dom';
// // import About from './components/About'; // Import the About component




// // const App = () => {
// //   return (
// //     <Router>
// //       <div style={{ display: 'flex' }}>
// //         <Sidebar />
// //         <div style={{ flex: 1, padding: '20px' }}>
// //           <Header />
// //           <Routes>
// //   <Route path="/" element={<Home />} />
// //   <Route path="/about" element={<About />} />
// //   <Route path="/cart" element={<CartPage />} />
// //   <Route path="/qr" element={<QRCodePage />} />
// //   <Route path="/about" element={<About />} />  {/* About route */}

// // </Routes>

// //         </div>
// //       </div>
// //     </Router>
// //   );
// // };

// // export default App;


// // src/App.js
// import React, { useState } from 'react'; 
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importing only the necessary parts
// import Header from './components/Header';
// import Sidebar from './components/sidebar';
// import Home from './pages/Home';
// import CartPage from './pages/CartPage';
// import QRCodePage from './pages/QRCodePage';
// import About from './components/About'; // Import the About component
// import ProductListPage from './pages/ProductListPage'; // Import Product List Page


// const App = () => {
//   // const [cart, setCart] = useState([]);

//   // const addToCart = (product) => {
//   //   setCart([...cart, product]);
//   // };
//   return (
//     <Router>
//       <div style={{ display: 'flex' }}>
//         <Sidebar />
//         <div style={{ flex: 1, padding: '20px' }}>
//           <Header />
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/cart" element={<CartPage />} />
//             <Route path="/qr" element={<QRCodePage />} />
//             <Route path="/products" element={<ProductListPage />} />

//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// };

// export default App;


import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/services';
import Events from './components/Events';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Services />
      <Events />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;