import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Home } from './Components/Home';
import { Aboutus } from './Components/Aboutus';
import { HomeDecor } from './Components/HomeDecor';
import { Jewellery } from './Components/Jewellery';
import { Gifting } from './Components/Gifting';
import Feedback from './Components/Feedback';
import Signup from './Components/Signup';
import Login from './Components/Login';
import { Cart } from './Components/Cart';
import Navigationbar from './Components/Navigationbar ';
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { app } from "./Components/Firebase";
import './App.css';

function App() {
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [user, setUser] = useState(null);
  const auth = getAuth(app);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    setCartCount(cartCount + 1);
  };

  const handleDeleteFromCart = (indexToRemove) => {
    setCart(cart.filter((_, index) => index !== indexToRemove));
    setCartCount(cartCount - 1);
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        console.error("Error logging out:", error.message);
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser); // Set the user state if authenticated
      } else {
        setUser(null); // Reset user state if not logged in
      }
    });
    return () => unsubscribe();
  }, [auth]);

  return (
    <>
      <Navigationbar user={user} handleLogout={handleLogout} count={cartCount} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutus />} />
        <Route 
          path="/homedecor" 
          element={<HomeDecor handleAddToCart={handleAddToCart} />} 
        />
        <Route 
          path="/gift" 
          element={<Gifting handleAddToCart={handleAddToCart} handleDeleteFromCart={handleDeleteFromCart} />} 
        />
        <Route 
          path="/jewellery" 
          element={<Jewellery handleAddToCart={handleAddToCart} />} 
        />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route 
          path="/carts" 
          element={<Cart cart={cart} handleDeleteFromCart={handleDeleteFromCart} />} 
        />
      </Routes>
    </>
  );
}

export default App;
