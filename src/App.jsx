import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Pages/Home';
import Login from './components/Pages/Login';
import { UserProvider } from './context/Context';
import SignUp from './components/Pages/SignUp';
import ShoppingProductPage from './components/Pages/Cart/ShoppingProductsPage';
import Cart from './components/Pages/Cart/Cart';
import Footer from './components/Footer';
import ContactUs from './components/Pages/ContactUs';
import SearchBar from './components/searchBar';
import ProductDetailPage from './components/Pages/Cart/ProductDetailPage';
import FAQ from './components/Pages/FAQ';
import { SearchProvider } from "./components/Pages/Cart/SearchContext";
 
const App = () => {
 
  return (
     <div>
      <UserProvider>
        <SearchProvider>
           <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Shopping" element={<ShoppingProductPage />} />
              <Route path="/ProductDetail/:productId" element={<ProductDetailPage />} />
              <Route path="/Cart" element={<Cart />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/searchbar" element={<SearchBar />} />
              <Route path="/FAQ" element={<FAQ />} />
             </Routes>
            <Footer />
          </BrowserRouter>
          </SearchProvider>
       </UserProvider>
    </div>
  );
};

export default App;
