import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home'

import Login from './pages/Login/Login';
import ProductWrite from './pages/ProductWrite';
import Product from './pages/Product';


const router = createBrowserRouter([
    {path: "/", 
    element: <Layout/>, 
    children: [
      {path: "/home", element: <Home/>}, 
      {path: "/product/write", element: <ProductWrite />},
      {path: "/product", element: <Product />},
    ]}, {path: "login", element: <Login/>}
  ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <BrowserRouter>
      <App />
    </BrowserRouter> */}
    <RouterProvider router={router} />
    
  </React.StrictMode>,
)


