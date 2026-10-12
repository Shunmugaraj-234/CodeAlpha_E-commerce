import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';

const ProductModal = () => {
  const {
    selectedProductDetails,
    closeProductDetails,
    addToCart,
    openCheckout
  } = useShop();

  const [quantity, setQuantity] = useState(1);

  if (!selectedProductDetails) return null;

  const p = selectedProductDetails;
  const stock = p.stock !== undefined ? p.stock : 50;
  const isOutOfStock = stock <= 0;

  const price = Number(p.price);
  const origPrice = p.originalPrice ? Number(p.originalPrice) : Math.round(price * 1.4);
  const discountPct = origPrice > price ? Math.round(((origPrice - price) / origPrice) * 100) : 0;

  const handleAddToCart = () => {
    addToCart(p, quantity);
    closeProductDetails();
  };

  const handleBuyNow = () => {
    addToCart(p, quantity);
    closeProductDetails();
    openCheckout();
  };

  return (
    <div className="modal-overlay" onClick={closeProductDetails}>
      <div className="modal-content fade-in" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={closeProductDetails}>✕</button>

        <div className="product-modal-grid">
          <div className="modal-image-col">
            <img
              src={p.image}
              alt={p.name}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f1f8e9'/%3E%3Cpath d='M200 80 C 140 140, 140 220, 200 220 C 260 220, 260 140, 200 80 Z' fill='%23388e3c' opacity='0.75'/%3E%3Cpath d='M200 110 L200 200' stroke='%23ffffff' stroke-width='4' stroke-linecap='round'/%3E%3Ctext x='50%25' y='85%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-weight='bold' font-size='16' fill='%231b5e20'%3EOrganic Seedora%3C/text%3E%3C/svg%3E";
              }}
            />
          </div>

          <div className="modal-details-col">
            <div className="detail-tags">
              <span className="badge-cat">{p.category}</span>
              <span className="badge-brand">{p.brand || 'GreenThumb Organics'}</span>
              {discountPct > 0 && <span className="badge-disc">{discountPct}% OFF</span>}
            </div>

            <h2>{p.name}</h2>

            <div className="price-rating-row">
              <div className="modal-price-box">
                {origPrice > price && <span className="modal-orig-price">₹{origPrice}</span>}
                <span className="modal-price">₹{price}</span>
              </div>
              <div className="stars">
                {'★'.repeat(Math.floor(p.rating || 4.5))}
                <span>({p.rating || 4.5} / 5)</span>
              </div>
            </div>

            <p className="modal-desc">{p.description}</p>

            <div className="product-specs-box">
              <div className="spec-item">
                <span className="spec-label">🌱 Growing Guide:</span>
                <span className="spec-val">{p.growingInstructions || 'Sow 1/4 inch deep in moist, sunny soil.'}</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">☀️ Suitable Season:</span>
                <span className="spec-val">{p.season || 'Spring / Summer'}</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">🪴 Soil Type:</span>
                <span className="spec-val">{p.soilType || 'Well-draining fertile loam'}</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">📦 Stock Status:</span>
                <span className={`stock-status ${isOutOfStock ? 'out' : 'in'}`}>
                  {isOutOfStock ? 'Out of Stock' : `In Stock (${stock} available)`}
                </span>
              </div>
            </div>

            {!isOutOfStock && (
              <div className="qty-row">
                <label>Quantity:</label>
                <div className="qty-controls">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                  <span>{quantity}</span>
                  <button onClick={() => setQuantity(Math.min(stock, quantity + 1))}>+</button>
                </div>
              </div>
            )}

            <div className="modal-actions">
              <button
                className="btn btn-outline flex-1"
                disabled={isOutOfStock}
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
              <button
                className="btn btn-primary flex-1"
                disabled={isOutOfStock}
                onClick={handleBuyNow}
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.65);
          backdrop-filter: blur(4px);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
        }
        .modal-content {
          background: white;
          width: 100%;
          max-width: 840px;
          border-radius: 12px;
          position: relative;
          overflow: hidden;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.2);
          max-height: 90vh;
          overflow-y: auto;
        }
        .close-btn {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: #f1f5f9;
          border: none;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          font-size: 1.1rem;
          cursor: pointer;
          z-index: 20;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s;
        }
        .close-btn:hover {
          background: #e2e8f0;
        }
        .product-modal-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
        }
        .modal-image-col {
          height: 100%;
          min-height: 320px;
          background: #f8fafc;
        }
        .modal-image-col img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .modal-details-col {
          padding: 2rem;
          display: flex;
          flex-direction: column;
        }
        .detail-tags {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 0.5rem;
          align-items: center;
        }
        .badge-cat {
          background: #dcfce7;
          color: var(--color-primary);
          padding: 0.2rem 0.6rem;
          border-radius: 4px;
          font-size: 0.78rem;
          font-weight: 700;
        }
        .badge-brand {
          background: #f1f5f9;
          color: var(--color-text-light);
          padding: 0.2rem 0.6rem;
          border-radius: 4px;
          font-size: 0.78rem;
          font-weight: 600;
        }
        .badge-disc {
          background: #ef4444;
          color: white;
          padding: 0.2rem 0.6rem;
          border-radius: 4px;
          font-size: 0.78rem;
          font-weight: 700;
        }
        .modal-details-col h2 {
          font-size: 1.5rem;
          font-weight: 800;
          margin-bottom: 0.5rem;
          line-height: 1.25;
        }
        .price-rating-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1rem;
        }
        .modal-price-box {
          display: flex;
          align-items: baseline;
          gap: 0.5rem;
        }
        .modal-orig-price {
          font-size: 1.1rem;
          color: #94a3b8;
          text-decoration: line-through;
        }
        .modal-price {
          font-size: 1.7rem;
          font-weight: 800;
          color: var(--color-primary);
        }
        .stars {
          color: #f59e0b;
          font-weight: bold;
          font-size: 0.95rem;
        }
        .stars span {
          color: #64748b;
          font-size: 0.8rem;
          margin-left: 0.3rem;
        }
        .modal-desc {
          color: var(--color-text-light);
          font-size: 0.95rem;
          margin-bottom: 1.25rem;
          line-height: 1.5;
        }
        .product-specs-box {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          padding: 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          font-size: 0.88rem;
          margin-bottom: 1.25rem;
        }
        .spec-item {
          display: flex;
          flex-direction: column;
        }
        .spec-label {
          font-weight: 700;
          color: var(--color-text);
          margin-bottom: 0.1rem;
        }
        .spec-val {
          color: #475569;
        }
        .stock-status.in {
          color: #16a34a;
          font-weight: 700;
        }
        .stock-status.out {
          color: #dc2626;
          font-weight: 700;
        }
        .qty-row {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }
        .qty-row label {
          font-weight: 600;
          font-size: 0.9rem;
        }
        .qty-controls {
          display: flex;
          align-items: center;
          border: 1px solid #cbd5e1;
          border-radius: 6px;
          overflow: hidden;
        }
        .qty-controls button {
          background: #f1f5f9;
          width: 32px;
          height: 32px;
          font-size: 1.1rem;
          font-weight: bold;
          cursor: pointer;
        }
        .qty-controls span {
          padding: 0 0.8rem;
          font-weight: bold;
        }
        .modal-actions {
          display: flex;
          gap: 0.75rem;
          margin-top: auto;
        }
        .flex-1 { flex: 1; }

        @media (max-width: 700px) {
          .product-modal-grid {
            grid-template-columns: 1fr;
          }
          .modal-image-col {
            height: 220px;
          }
        }
      `}</style>
    </div>
  );
};

export default ProductModal;
