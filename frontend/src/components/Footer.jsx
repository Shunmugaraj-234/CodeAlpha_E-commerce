import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';

const Footer = () => {
  const { setSelectedCategory, showNotification } = useShop();
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    showNotification('Thank you for subscribing to Seedora newsletter!', 'success');
    setEmail('');
  };

  const handleCatClick = (cat) => {
    setSelectedCategory(cat);
    const elem = document.getElementById('products');
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-col brand-col">
          <div className="logo">
            <span className="logo-icon">🌱</span>
            <span className="logo-text">Seedora</span>
          </div>
          <p className="tagline">
            Your premier online platform for certified organic, non-GMO vegetable, flower, herb, and fruit seeds. Growing a greener future together with Seedora.
          </p>
          <div className="social-links">
            <span>🌿 100% Organic Certified</span>
            <span>⭐ 98.6% Germination Guarantee</span>
            <span>🚚 Free Shipping on orders over ₹499</span>
          </div>
        </div>

        <div className="footer-col">
          <h4>Seed Categories</h4>
          <ul>
            <li onClick={() => handleCatClick('Vegetable Seeds')}>Vegetable Seeds</li>
            <li onClick={() => handleCatClick('Flower Seeds')}>Flower Seeds</li>
            <li onClick={() => handleCatClick('Herb Seeds')}>Herb Seeds</li>
            <li onClick={() => handleCatClick('Organic Seeds')}>Organic Seeds</li>
            <li onClick={() => handleCatClick('Fruit Seeds')}>Fruit Seeds</li>
            <li onClick={() => handleCatClick('Gardening Seeds')}>Gardening Seeds</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Customer Care</h4>
          <ul>
            <li>Shipping & Delivery Policy</li>
            <li>Germination Guarantee</li>
            <li>Planting Guides & FAQs</li>
            <li>Return Policy</li>
            <li>Contact Seedora Support</li>
          </ul>
        </div>

        <div className="footer-col newsletter-col">
          <h4>Join Seedora Club</h4>
          <p>Subscribe to receive seasonal planting tips, exclusive coupon codes (SEEDORA10), and new seed releases.</p>
          <form onSubmit={handleSubscribe} className="newsletter-form">
            <input
              type="email"
              placeholder="Enter your email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="btn btn-primary btn-sm">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container bottom-content">
          <p>&copy; {new Date().getFullYear()} Seedora — Online Seed E-Commerce Platform. All rights reserved.</p>
          <div className="payment-badges">
            <span>📱 UPI (GPay/PhonePe)</span>
            <span>💵 Cash on Delivery</span>
            <span>💳 Card Payment</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background-color: #1b4332;
          color: #d8f3dc;
          padding-top: 4rem;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr 1.2fr;
          gap: 2.5rem;
          margin-bottom: 3rem;
        }
        .logo {
          font-size: 1.6rem;
          font-weight: 800;
          color: #ffffff;
          display: flex;
          align-items: center;
          gap: 0.4rem;
          margin-bottom: 0.8rem;
        }
        .tagline {
          font-size: 0.88rem;
          color: #b7e4c7;
          line-height: 1.6;
          margin-bottom: 1.25rem;
        }
        .social-links {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          font-size: 0.82rem;
          color: #74c69d;
          font-weight: 600;
        }
        .footer-col h4 {
          color: #ffffff;
          font-size: 1.1rem;
          font-weight: 700;
          margin-bottom: 1.2rem;
        }
        .footer-col ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }
        .footer-col li {
          font-size: 0.88rem;
          color: #b7e4c7;
          cursor: pointer;
          transition: color 0.2s, transform 0.2s;
        }
        .footer-col li:hover {
          color: #ffffff;
          transform: translateX(4px);
        }
        .newsletter-col p {
          font-size: 0.88rem;
          color: #b7e4c7;
          margin-bottom: 1rem;
          line-height: 1.5;
        }
        .newsletter-form {
          display: flex;
          gap: 0.5rem;
        }
        .newsletter-form input {
          flex: 1;
          padding: 0.55rem 0.75rem;
          border: 1px solid #40916c;
          border-radius: var(--radius);
          background: #2d6a4f;
          color: white;
          font-size: 0.88rem;
          outline: none;
        }
        .newsletter-form input::placeholder {
          color: #95d5b2;
        }
        .footer-bottom {
          border-top: 1px solid #2d6a4f;
          padding: 1.5rem 0;
          font-size: 0.82rem;
          color: #95d5b2;
        }
        .bottom-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
        }
        .payment-badges {
          display: flex;
          gap: 1rem;
        }

        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
        @media (max-width: 550px) {
          .footer-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
