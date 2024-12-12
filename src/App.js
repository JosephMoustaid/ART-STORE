import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import About from "./pages/About";
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import Blog from "./pages/Blog";
import Cart from "./pages/Cart";
import Shop from './pages/Shop';
import SingleItem from './pages/SingleItem';
import BlogPost from './pages/BlogPost';
import Checkout from './pages/Checkout';
import Payement from './pages/Payement';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:id" element={<SingleItem />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/payement" element={<Payement />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;