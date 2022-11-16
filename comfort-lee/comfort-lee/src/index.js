import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './global.css'
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter,RouterProvider} from 'react-router-dom';
import Home from './components/Home/Home';
import Account from './components/Account/Account'
import Checkout from './components/Checkout/Checkout'
import Login from './components/Login/Login'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/accounts/:id",
    element: <Account/>,
  },
  {
    path: "/checkout",
    element: <Checkout/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
]);
root.render(
  <React.StrictMode>
    <Navbar/>
    <RouterProvider router={router}/>
    <Footer/>
  </React.StrictMode>
);

reportWebVitals();
