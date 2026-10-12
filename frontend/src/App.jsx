import React from 'react';
import { ShopProvider } from './context/ShopContext';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import CategoriesSection from './components/CategoriesSection';
import ProductList from './components/ProductList';
import WhyChooseUs from './components/WhyChooseUs';
import ReviewsSection from './components/ReviewsSection';
import Footer from './components/Footer';

// Modals & Drawers
import CartDrawer from './components/CartDrawer';
import WishlistModal from './components/WishlistModal';
import ProductModal from './components/ProductModal';
import CheckoutModal from './components/CheckoutModal';
import AuthModal from './components/AuthModal';
import UserProfileModal from './components/UserProfileModal';
import OrdersModal from './components/OrdersModal';
import AdminModal from './components/AdminModal';
import Toast from './components/Toast';

import './App.css';

function App() {
  return (
    <ShopProvider>
      <div className="app">
        <Navbar />

        <main>
          <HeroSection />
          <CategoriesSection />
          <ProductList />
          <WhyChooseUs />
          <ReviewsSection />
        </main>

        <Footer />

        {/* Global Modals */}
        <CartDrawer />
        <WishlistModal />
        <ProductModal />
        <CheckoutModal />
        <AuthModal />
        <UserProfileModal />
        <OrdersModal />
        <AdminModal />
        <Toast />
      </div>
    </ShopProvider>
  );
}

export default App;
