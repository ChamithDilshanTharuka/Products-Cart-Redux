import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import './App.css';
import Products from './components/Products';
import Cart from './components/Cart';
import Dashboard from './components/Dashboard'  /* default route*/
import RootLayout from './components/RootLayout';  
import NavbarPanel from './components/NavbarPanel';


function App() {
  const router = createBrowserRouter(createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="Products" element={<Products />} />
        <Route path="Cart" element={<Cart />} />
      </Route>
    )
  );

  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
