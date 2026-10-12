import React from 'react';
import { useShop } from '../context/ShopContext';

const ProductCard = ({ product, onViewDetails }) => {
  const { addToCart, toggleWishlist, isInWishlist } = useShop();
  const prodId = product._id || product.id;
  const stock = product.stock !== undefined ? product.stock : 50;
  const isOutOfStock = stock <= 0;

  const price = Number(product.price);
  const origPrice = product.originalPrice ? Number(product.originalPrice) : Math.round(price * 1.4);
  const discountPct = origPrice > price ? Math.round(((origPrice - price) / origPrice) * 100) : 0;

  const renderStars = (rating = 4.5) => {
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 >= 0.5;
    return (
      <span className="star-rating" title={`${rating} out of 5 stars`}>
        {'★'.repeat(fullStars)}
        {hasHalf && '½'}
        <span className="rating-num">({rating})</span>
      </span>
    );
  };

  return (
    <div className={`product-card ${isOutOfStock ? 'out-of-stock-card' : ''}`}>
      <div className="card-image" onClick={() => onViewDetails(product)}>
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f1f8e9'/%3E%3Cpath d='M200 80 C 140 140, 140 220, 200 220 C 260 220, 260 140, 200 80 Z' fill='%23388e3c' opacity='0.75'/%3E%3Cpath d='M200 110 L200 200' stroke='%23ffffff' stroke-width='4' stroke-linecap='round'/%3E%3Ctext x='50%25' y='85%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-weight='bold' font-size='16' fill='%231b5e20'%3EOrganic Seedora%3C/text%3E%3C/svg%3E";
          }}
        />

        <div className="card-badges">
          {discountPct > 0 && (
            <span className="badge-pill badge-discount">{discountPct}% OFF</span>
          )}
          {stock > 0 && stock <= 10 && (
            <span className="badge-pill badge-warning">Only {stock} Left!</span>
          )}
          {isOutOfStock && (
            <span className="badge-pill badge-danger">Out of Stock</span>
          )}
          {product.brand && (
            <span className="badge-pill badge-info">{product.brand}</span>
          )}
        </div>

        <button
          className={`wishlist-toggle ${isInWishlist(prodId) ? 'active' : ''}`}
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist(product);
          }}
          title={isInWishlist(prodId) ? "Remove from wishlist" : "Add to wishlist"}
        >
          {isInWishlist(prodId) ? '❤️' : '🤍'}
        </button>
      </div>

      <div className="card-content">
        <div className="card-header">
          <span className="category">{product.category}</span>
          <div className="price-box">
            {origPrice > price && <span className="orig-price">₹{origPrice}</span>}
            <span className="price">₹{price}</span>
          </div>
        </div>

        <h3 className="product-title" onClick={() => onViewDetails(product)}>
          {product.name}
        </h3>

        <p className="short-desc">{product.description}</p>

        <div className="card-footer-meta">
          {renderStars(product.rating)}
        </div>

        <div className="card-actions">
          <button
            className="btn btn-outline btn-sm view-btn"
            onClick={() => onViewDetails(product)}
          >
            View Details
          </button>

          <button
            className="btn btn-primary btn-sm add-btn"
            disabled={isOutOfStock}
            onClick={(e) => {
              e.stopPropagation();
              addToCart(product);
            }}
          >
            {isOutOfStock ? 'Out of Stock' : 'Add to Cart'}
          </button>
        </div>
      </div>

      <style jsx>{`
        .product-card {
          background: white;
          border-radius: var(--radius);
          box-shadow: var(--shadow-sm);
          overflow: hidden;
          transition: transform 0.3s cubic-bezier(0.165, 0.84, 0.44, 1), box-shadow 0.3s ease;
          position: relative;
          display: flex;
          flex-direction: column;
          border: 1px solid rgba(0, 0, 0, 0.05);
        }
        .product-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.12);
        }
        .card-image {
          height: 210px;
          overflow: hidden;
          cursor: pointer;
          position: relative;
          background-color: #f8fafc;
        }
        .card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }
        .product-card:hover .card-image img {
          transform: scale(1.06);
        }
        .card-badges {
          position: absolute;
          top: 0.6rem;
          left: 0.6rem;
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
          z-index: 5;
        }
        .badge-pill {
          font-size: 0.72rem;
          font-weight: 700;
          padding: 0.2rem 0.5rem;
          border-radius: 4px;
          color: white;
          text-transform: uppercase;
          letter-spacing: 0.3px;
        }
        .badge-discount { background-color: #dc2626; }
        .badge-warning { background-color: #f59e0b; }
        .badge-danger { background-color: #ef4444; }
        .badge-info { background-color: #2E7D32; opacity: 0.9; }

        .wishlist-toggle {
          position: absolute;
          top: 0.6rem;
          right: 0.6rem;
          background: rgba(255, 255, 255, 0.9);
          border: none;
          border-radius: 50%;
          width: 34px;
          height: 34px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-size: 1.1rem;
          transition: transform 0.2s, background 0.2s;
          box-shadow: var(--shadow-sm);
          z-index: 10;
        }
        .wishlist-toggle:hover {
          transform: scale(1.15);
          background: white;
        }
        .card-content {
          padding: 1.1rem;
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.4rem;
        }
        .category {
          color: var(--color-primary);
          font-weight: 600;
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .price-box {
          display: flex;
          align-items: baseline;
          gap: 0.4rem;
        }
        .orig-price {
          font-size: 0.85rem;
          color: #94a3b8;
          text-decoration: line-through;
        }
        .price {
          font-weight: 800;
          font-size: 1.2rem;
          color: var(--color-text);
        }
        .product-title {
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--color-text);
          margin-bottom: 0.4rem;
          cursor: pointer;
          line-height: 1.3;
          transition: color 0.2s;
        }
        .product-title:hover {
          color: var(--color-primary);
        }
        .short-desc {
          font-size: 0.85rem;
          color: var(--color-text-light);
          margin-bottom: 0.75rem;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          line-height: 1.4;
        }
        .card-footer-meta {
          margin-bottom: 1rem;
          font-size: 0.85rem;
        }
        .star-rating {
          color: #f59e0b;
          font-weight: bold;
        }
        .rating-num {
          color: var(--color-text-light);
          font-size: 0.8rem;
          margin-left: 0.25rem;
        }
        .card-actions {
          margin-top: auto;
          display: flex;
          gap: 0.5rem;
        }
        .view-btn {
          flex: 1;
          padding: 0.5rem;
          font-size: 0.85rem;
        }
        .add-btn {
          flex: 1.2;
          padding: 0.5rem;
          font-size: 0.85rem;
        }
        .add-btn:disabled {
          background-color: #cbd5e1;
          cursor: not-allowed;
        }
      `}</style>
    </div>
  );
};

export default ProductCard;
