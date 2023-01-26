import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import Admin from './pages/Admin';
import ProtectedRoute from './pages/ProtectedRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {index: true, element: <Home/>},
      {path:'/shop', element: <Shop/>},
      {path: '/cart', element: <Cart/>},
      {path:'/admin', element:(
        <ProtectedRoute>
          <Admin requireAdmin={true}/>
        </ProtectedRoute>  
      )}
    ]
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);