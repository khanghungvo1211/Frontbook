import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import AllProduct from './pages/AllProduct';
import BeautyBlog from './pages/BeautyBlog';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Forgotpassword from './pages/Forgotpassword';
import Resetpassword from './pages/Resetpassword';
import SingleBlog from './pages/SingleBlog';
import SingleProduct from './pages/SingleProduct';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path='about' element={<About />} />
              <Route path='contact' element={<Contact />} />
              <Route path='allproduct' element={<AllProduct />} />
              <Route path='allproduct/:id' element={<SingleProduct />} />
              <Route path='cart' element={<Cart />} />
              <Route path='checkout' element={<Checkout />} />
              <Route path='beautyblog' element={<BeautyBlog />} />
              <Route path='blog/:id' element={<SingleBlog />} />
              <Route path='login' element={<Login />} />
              <Route path='signup' element={<Signup />} />
              <Route path='forgot-password' element={<Forgotpassword />} />
              <Route path='reset-password' element={<Resetpassword />} />
          </Route>
        </Routes>
       </BrowserRouter>
 </>
  );
}

export default App;
