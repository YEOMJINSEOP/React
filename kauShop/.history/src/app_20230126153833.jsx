import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { AuthContextProvider } from './context/AuthContext';

function App() {
  return (
    <AuthContextProvider>
      <Navbar />
      <Outlet />
    </AuthContextProvider>
  )
}

export default App;
