import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react';
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Home from './pages/Home'
import Navbar from './components/Navbar';
import Checkout from "./pages/CheckOutPage";
function App() {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");

    return savedCart
      ? JSON.parse(savedCart)
      : [];
  });

  useEffect(() => {
    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    );
  }, [cart]);
  return (
    <>
     <Navbar cart={cart} />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<ProductDetails cart={cart} setCart={setCart} />} />
      <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
      <Route path="/checkout" element={<Checkout cart={cart} setCart={setCart}/>}/>
    </Routes>
    </>
  );
}

export default App;
