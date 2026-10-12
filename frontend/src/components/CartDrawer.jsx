import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';

const CartDrawer = () => {
  const {
    cart,
    rawSubtotal,
    calculatedDiscount,
    discountedSubtotal,
    deliveryCharge,
    finalCartTotal,
    removeFromCart,
    updateQuantity,
    clearCart,
    isCartOpen,
    closeCart,
    openCheckout,
    appliedCoupon,
    applyCoupon,
    removeCoupon
  } = useShop();

  const [couponInput, setCouponInput] = useState('');

  if (!isCartOpen) return null;

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    if (!couponInput) return;
    applyCoupon(couponInput);
    setCouponInput('');
  };

  return (
    <div className="cart-drawer-overlay" onClick={closeCart}>
      <div className="cart-drawer fade-in" onClick={(e) => e.stopPropagation()}>
        <div className="drawer-header">
          <h3>🛒 Seedora Shopping Cart ({cart.reduce((a, b) => a + b.quantity, 0)})</h3>
          <button className="close-btn" onClick={closeCart}>✕</button>
        </div>

        {cart.length === 0 ? (
          <div className="empty-cart">
            <span className="empty-cart-icon">🌱</span>
            <h4>Your cart is empty</h4>
            <p>Start shopping for premium, fresh organic seeds for your home garden!</p>
            <button className="btn btn-primary" onClick={closeCart}>
              Browse Seeds
            </button>
          </div>
        ) : (
          <>
            <div className="cart-items-list">
              {cart.map((item) => {
                const itemId = item._id || item.id;
                const stock = item.stock !== undefined ? item.stock : 50;

                return (
                  <div key={itemId} className="cart-item">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="item-thumb"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f1f8e9'/%3E%3Cpath d='M200 80 C 140 140, 140 220, 200 220 C 260 220, 260 140, 200 80 Z' fill='%23388e3c' opacity='0.75'/%3E%3Cpath d='M200 110 L200 200' stroke='%23ffffff' stroke-width='4' stroke-linecap='round'/%3E%3Ctext x='50%25' y='85%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-weight='bold' font-size='16' fill='%231b5e20'%3EOrganic Seedora%3C/text%3E%3C/svg%3E";
                      }}
                    />

                    <div className="item-details">
                      <h4>{item.name}</h4>
                      <span className="item-price">₹{Number(item.price)} each</span>

                      <div className="qty-picker">
                        <button onClick={() => updateQuantity(itemId, -1)}>-</button>
                        <span>{item.quantity}</span>
                        <button
                          disabled={item.quantity >= stock}
                          onClick={() => updateQuantity(itemId, 1)}
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="item-subtotal-col">
                      <span className="subtotal-text">₹{item.price * item.quantity}</span>
                      <button
                        className="remove-btn"
                        onClick={() => removeFromCart(itemId)}
                        title="Remove item"
                      >
                        🗑️
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Coupon Code Section */}
            <div className="coupon-box">
              {appliedCoupon ? (
                <div className="applied-coupon-pill">
                  <span>🏷️ <strong>{appliedCoupon.code}</strong> applied ({appliedCoupon.desc})</span>
                  <button onClick={removeCoupon}>Remove</button>
                </div>
              ) : (
                <form onSubmit={handleApplyCoupon} className="coupon-form">
                  <input
                    type="text"
                    placeholder="Enter Coupon (e.g. SEEDORA10)"
                    value={couponInput}
                    onChange={(e) => setCouponInput(e.target.value)}
                  />
                  <button type="submit" className="btn btn-outline btn-sm">Apply</button>
                </form>
              )}
            </div>

            <div className="drawer-footer">
              <div className="summary-row">
                <span>Subtotal:</span>
                <span>₹{rawSubtotal}</span>
              </div>

              {calculatedDiscount > 0 && (
                <div className="summary-row discount-row">
                  <span>Coupon Discount ({appliedCoupon?.code}):</span>
                  <span>-₹{calculatedDiscount}</span>
                </div>
              )}

              <div className="summary-row">
                <span>Delivery Charge:</span>
                <span>{deliveryCharge === 0 ? <strong className="free-tag">FREE</strong> : `₹${deliveryCharge}`}</span>
              </div>

              {discountedSubtotal < 499 && rawSubtotal > 0 && (
                <div className="free-shipping-tip">
                  Add ₹{499 - discountedSubtotal} more for <strong>FREE Delivery!</strong>
                </div>
              )}

              <div className="summary-row total-row">
                <span>Grand Total:</span>
                <span>₹{finalCartTotal}</span>
              </div>

              <div className="drawer-actions">
                <button className="btn btn-outline flex-1" onClick={clearCart}>
                  Clear Cart
                </button>
                <button
                  className="btn btn-primary flex-2"
                  onClick={() => {
                    closeCart();
                    openCheckout();
                  }}
                >
                  Proceed to Checkout &rarr;
                </button>
              </div>
            </div>
          </>
        )}
      </div>

      <style jsx>{`
        .cart-drawer-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(2px);
          z-index: 1000;
          display: flex;
          justify-content: flex-end;
        }
        .cart-drawer {
          background: white;
          width: 100%;
          max-width: 440px;
          height: 100%;
          display: flex;
          flex-direction: column;
          box-shadow: -4px 0 25px rgba(0, 0, 0, 0.15);
        }
        .drawer-header {
          padding: 1.25rem 1.5rem;
          border-bottom: 1px solid #e2e8f0;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .drawer-header h3 {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--color-text);
        }
        .close-btn {
          background: #f1f5f9;
          border: none;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          cursor: pointer;
        }
        .empty-cart {
          padding: 4rem 2rem;
          text-align: center;
          margin: auto 0;
        }
        .empty-cart-icon {
          font-size: 3.5rem;
          display: block;
          margin-bottom: 0.5rem;
        }
        .empty-cart h4 {
          font-size: 1.2rem;
          margin-bottom: 0.4rem;
        }
        .empty-cart p {
          color: var(--color-text-light);
          margin-bottom: 1.5rem;
          font-size: 0.9rem;
        }
        .cart-items-list {
          flex: 1;
          overflow-y: auto;
          padding: 1rem 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .cart-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid #f1f5f9;
        }
        .item-thumb {
          width: 64px;
          height: 64px;
          object-fit: cover;
          border-radius: 8px;
        }
        .item-details {
          flex: 1;
        }
        .item-details h4 {
          font-size: 0.95rem;
          font-weight: 700;
          margin-bottom: 0.2rem;
        }
        .item-price {
          font-size: 0.8rem;
          color: var(--color-text-light);
          display: block;
          margin-bottom: 0.4rem;
        }
        .qty-picker {
          display: inline-flex;
          align-items: center;
          border: 1px solid #cbd5e1;
          border-radius: 4px;
          overflow: hidden;
        }
        .qty-picker button {
          background: #f1f5f9;
          width: 26px;
          height: 26px;
          font-weight: bold;
          cursor: pointer;
        }
        .qty-picker button:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }
        .qty-picker span {
          padding: 0 0.5rem;
          font-size: 0.85rem;
          font-weight: bold;
        }
        .item-subtotal-col {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 0.4rem;
        }
        .subtotal-text {
          font-weight: 800;
          color: var(--color-primary);
          font-size: 0.95rem;
        }
        .remove-btn {
          background: none;
          border: none;
          cursor: pointer;
          font-size: 1rem;
        }
        .coupon-box {
          padding: 0.75rem 1.5rem;
          border-top: 1px solid #f1f5f9;
          background: #fafafa;
        }
        .coupon-form {
          display: flex;
          gap: 0.5rem;
        }
        .coupon-form input {
          flex: 1;
          padding: 0.4rem 0.75rem;
          border: 1px solid #cbd5e1;
          border-radius: 4px;
          font-size: 0.85rem;
          text-transform: uppercase;
        }
        .applied-coupon-pill {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: #dcfce7;
          color: #166534;
          padding: 0.4rem 0.75rem;
          border-radius: 4px;
          font-size: 0.82rem;
        }
        .applied-coupon-pill button {
          background: none;
          border: none;
          color: #dc2626;
          font-weight: bold;
          cursor: pointer;
        }
        .drawer-footer {
          padding: 1.25rem 1.5rem;
          border-top: 1px solid #e2e8f0;
          background: #f8fafc;
        }
        .summary-row {
          display: flex;
          justify-content: space-between;
          font-size: 0.9rem;
          margin-bottom: 0.4rem;
        }
        .discount-row {
          color: #dc2626;
          font-weight: 600;
        }
        .total-row {
          font-size: 1.15rem;
          font-weight: 800;
          color: var(--color-text);
          margin-top: 0.5rem;
          padding-top: 0.5rem;
          border-top: 1px dashed #cbd5e1;
        }
        .free-tag {
          color: #16a34a;
        }
        .free-shipping-tip {
          font-size: 0.78rem;
          color: var(--color-primary);
          background: #dcfce7;
          padding: 0.3rem 0.6rem;
          border-radius: 4px;
          margin: 0.4rem 0;
        }
        .drawer-actions {
          display: flex;
          gap: 0.75rem;
          margin-top: 1rem;
        }
        .flex-1 { flex: 1; }
        .flex-2 { flex: 2; }
      `}</style>
    </div>
  );
};

export default CartDrawer;
