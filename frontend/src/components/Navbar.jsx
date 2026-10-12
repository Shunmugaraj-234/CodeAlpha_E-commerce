import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';

const Navbar = () => {
  const {
    cartCount,
    openCart,
    wishlistCount,
    openWishlist,
    user,
    openAuth,
    openProfile,
    openOrders,
    openAdmin,
    searchQuery,
    setSearchQuery,
    setSelectedCategory
  } = useShop();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const productSec = document.getElementById('products');
    if (productSec) productSec.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCategoryClick = (cat) => {
    setSelectedCategory(cat);
    const productSec = document.getElementById('products');
    if (productSec) productSec.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="container navbar-content">
        <div className="logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span className="logo-icon">🌱</span>
          <span className="logo-text">Seedora</span>
        </div>

        <form className="nav-search" onSubmit={handleSearchSubmit}>
          <input
            type="text"
            placeholder="Search Seedora organic seeds..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit" className="search-btn">🔍</button>
        </form>

        <div className="nav-actions">
          {user ? (
            <div className="user-menu">
              <button className="nav-btn user-btn" onClick={openProfile}>
                👤 <span className="mobile-hide">{user.name.split(' ')[0]}</span>
              </button>
              <button className="nav-btn" onClick={openOrders} title="My Orders">
                📦 <span className="mobile-hide">Orders</span>
              </button>
              {user.role === 'admin' && (
                <button className="nav-btn admin-badge" onClick={openAdmin} title="Admin Panel">
                  ⚙️ <span className="mobile-hide">Admin</span>
                </button>
              )}
            </div>
          ) : (
            <div className="auth-btns">
              <button className="nav-btn-link" onClick={() => openAuth('login')}>Login</button>
              <button className="btn btn-primary btn-sm" onClick={() => openAuth('register')}>Register</button>
            </div>
          )}

          <button className="nav-btn icon-btn" onClick={openWishlist} title="Wishlist">
            ❤️
            {wishlistCount > 0 && <span className="badge">{wishlistCount}</span>}
          </button>
          <button className="nav-btn icon-btn cart-btn-highlight" onClick={openCart} title="Cart">
            🛒
            {cartCount > 0 && <span className="badge">{cartCount}</span>}
          </button>

          <button className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            ☰
          </button>
        </div>
      </div>

      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <form className="mobile-search" onSubmit={handleSearchSubmit}>
          <input
            type="text"
            placeholder="Search seeds..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit">🔍</button>
        </form>
        <div className="mobile-nav-links">
          <h4>Seed Categories</h4>
          <button onClick={() => handleCategoryClick('All')}>All Seeds</button>
          <button onClick={() => handleCategoryClick('Vegetable Seeds')}>Vegetable Seeds</button>
          <button onClick={() => handleCategoryClick('Flower Seeds')}>Flower Seeds</button>
          <button onClick={() => handleCategoryClick('Herb Seeds')}>Herb Seeds</button>
          <button onClick={() => handleCategoryClick('Organic Seeds')}>Organic Seeds</button>
          <button onClick={() => handleCategoryClick('Fruit Seeds')}>Fruit Seeds</button>
          <button onClick={() => handleCategoryClick('Gardening Seeds')}>Gardening Seeds</button>
        </div>
      </div>

      <style jsx>{`
        .navbar {
          background-color: var(--color-surface);
          box-shadow: var(--shadow-sm);
          padding: 0.85rem 0;
          position: sticky;
          top: 0;
          z-index: 900;
          transition: all 0.3s ease;
        }
        .navbar-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1.5rem;
        }
        .logo {
          font-size: 1.6rem;
          font-weight: 800;
          color: var(--color-primary);
          display: flex;
          align-items: center;
          gap: 0.4rem;
          cursor: pointer;
          letter-spacing: -0.5px;
          user-select: none;
        }
        .logo-icon {
          font-size: 1.8rem;
          transform: rotate(-10deg);
          transition: transform 0.3s;
        }
        .logo:hover .logo-icon {
          transform: rotate(10deg) scale(1.1);
        }
        .nav-search {
          display: flex;
          align-items: center;
          flex: 1;
          max-width: 480px;
          background-color: var(--color-bg);
          border-radius: 999px;
          padding: 0.35rem 0.5rem 0.35rem 1.2rem;
          border: 1px solid rgba(46, 125, 50, 0.2);
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .nav-search:focus-within {
          border-color: var(--color-primary);
          box-shadow: 0 0 0 3px rgba(46, 125, 50, 0.15);
        }
        .nav-search input {
          border: none;
          background: transparent;
          width: 100%;
          outline: none;
          font-size: 0.95rem;
          color: var(--color-text);
        }
        .search-btn {
          background: var(--color-primary);
          color: white;
          border: none;
          border-radius: 50%;
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.85rem;
          cursor: pointer;
          transition: background 0.2s;
        }
        .search-btn:hover {
          background: var(--color-primary-dark);
        }
        .nav-actions {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .user-menu {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .auth-btns {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .nav-btn-link {
          background: transparent;
          border: none;
          font-weight: 600;
          color: var(--color-primary);
          padding: 0.5rem 0.75rem;
          cursor: pointer;
        }
        .nav-btn-link:hover {
          text-decoration: underline;
        }
        .btn-sm {
          padding: 0.45rem 1rem;
          font-size: 0.88rem;
          border-radius: 999px;
        }
        .nav-btn {
          background: transparent;
          font-size: 0.95rem;
          color: var(--color-text);
          display: flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.5rem 0.8rem;
          border-radius: var(--radius);
          cursor: pointer;
          position: relative;
          transition: background 0.2s, transform 0.15s;
          font-weight: 500;
        }
        .nav-btn:hover {
          background-color: var(--color-bg);
          transform: translateY(-1px);
        }
        .cart-btn-highlight {
          background-color: var(--color-bg);
          border: 1px solid rgba(46, 125, 50, 0.2);
        }
        .badge {
          background-color: var(--color-accent);
          color: white;
          font-size: 0.75rem;
          padding: 0.15rem 0.45rem;
          border-radius: 999px;
          font-weight: bold;
          position: relative;
          top: -2px;
        }
        .admin-badge {
          color: #d97706;
          font-weight: 700;
        }
        .mobile-toggle {
          display: none;
          background: transparent;
          font-size: 1.5rem;
          border: none;
          cursor: pointer;
          color: var(--color-text);
          padding: 0.3rem;
        }
        .mobile-nav-drawer {
          display: none;
          background: var(--color-surface);
          border-top: 1px solid #e5e7eb;
          padding: 1rem;
          flex-direction: column;
          gap: 1rem;
        }
        .mobile-nav-drawer.open {
          display: flex;
        }
        .mobile-search {
          display: flex;
          gap: 0.5rem;
        }
        .mobile-search input {
          flex: 1;
          padding: 0.6rem 1rem;
          border: 1px solid #ccc;
          border-radius: var(--radius);
        }
        .mobile-search button {
          padding: 0.6rem 1rem;
          background: var(--color-primary);
          color: white;
          border-radius: var(--radius);
        }
        .mobile-nav-links {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .mobile-nav-links h4 {
          color: var(--color-text-light);
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .mobile-nav-links button {
          background: transparent;
          text-align: left;
          padding: 0.5rem;
          font-size: 0.95rem;
          color: var(--color-text);
          border-radius: 4px;
        }
        .mobile-nav-links button:hover {
          background: var(--color-bg);
          color: var(--color-primary);
        }

        @media (max-width: 850px) {
          .nav-search {
            display: none;
          }
          .mobile-toggle {
            display: block;
          }
          .mobile-hide {
            display: none;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
