import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from "react-router-dom";

import './index.css';
import { ProductProvider } from "./Contexts/ProductContext";
import App from './App';
import { CartProvider } from './Contexts/CartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
   <Router>
    <ProductProvider>
     <CartProvider>
      <App />
     </CartProvider>
    </ProductProvider>
   </Router>
  </React.StrictMode>
);