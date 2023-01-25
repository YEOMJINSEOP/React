import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import AllProducts from './pages/AllProducts';
import NewProduct from './pages/NewProduct';
import ProductDetail from './pages/ProductDetail';
import MyCart from './pages/MyCart';
import NotFound from './pages/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <NotFound/>,
    children: [
      {index: true, element: <Home/>},
      {path: 'products', element:<AllProducts/>},
      {path: 'products/new', element:<NewProduct/>},
      {path: 'products/:id', element:<ProductDetail/>},
      {path: 'carts', element:<MyCart/>}
    ]
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);