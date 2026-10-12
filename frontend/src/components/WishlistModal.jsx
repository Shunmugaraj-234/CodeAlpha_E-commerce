import React from 'react';
import { useShop } from '../context/ShopContext';

const WishlistModal = () => {
    const {
        wishlist,
        toggleWishlist,
        addToCart,
        isWishlistOpen,
        closeWishlist
    } = useShop();

    if (!isWishlistOpen) return null;

    return (
        <div className="wishlist-overlay" onClick={closeWishlist}>
            <div className="wishlist-drawer fade-in" onClick={(e) => e.stopPropagation()}>
                <div className="wishlist-header">
                    <h2>❤️ Your Saved Wishlist ({wishlist.length})</h2>
                    <button className="close-btn" onClick={closeWishlist}>✕</button>
                </div>

                <div className="wishlist-items">
                    {wishlist.length === 0 ? (
                        <div className="empty-wishlist">
                            <span className="empty-icon">🤍</span>
                            <h4>Your wishlist is empty</h4>
                            <p>Tap the heart icon on any seed product card to save it for later!</p>
                        </div>
                    ) : (
                        wishlist.map((item) => {
                            const itemId = item._id || item.id;
                            return (
                                <div key={itemId} className="wishlist-item">
                                    <img
                                      src={item.image}
                                      alt={item.name}
                                      className="wishlist-item-img"
                                      onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f1f8e9'/%3E%3Cpath d='M200 80 C 140 140, 140 220, 200 220 C 260 220, 260 140, 200 80 Z' fill='%23388e3c' opacity='0.75'/%3E%3Cpath d='M200 110 L200 200' stroke='%23ffffff' stroke-width='4' stroke-linecap='round'/%3E%3Ctext x='50%25' y='85%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-weight='bold' font-size='16' fill='%231b5e20'%3EOrganic Seedora%3C/text%3E%3C/svg%3E";
                                      }}
                                    />
                                    <div className="wishlist-item-details">
                                        <h4>{item.name}</h4>
                                        <p className="price">₹{Number(item.price)}</p>
                                        <button
                                            className="btn btn-sm btn-primary"
                                            onClick={() => {
                                                addToCart(item);
                                                toggleWishlist(item);
                                            }}
                                        >
                                            Move to Cart
                                        </button>
                                    </div>
                                    <button
                                        className="remove-btn"
                                        onClick={() => toggleWishlist(item)}
                                        title="Remove from wishlist"
                                    >
                                        🗑️
                                    </button>
                                </div>
                            );
                        })
                    )}
                </div>
            </div>

            <style jsx>{`
        .wishlist-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.5);
          backdrop-filter: blur(2px);
          z-index: 1000;
          display: flex;
          justify-content: flex-end;
        }
        .wishlist-drawer {
          background: white;
          width: 100%;
          max-width: 400px;
          height: 100%;
          display: flex;
          flex-direction: column;
          box-shadow: -4px 0 25px rgba(0,0,0,0.15);
        }
        .wishlist-header {
          padding: 1.25rem 1.5rem;
          border-bottom: 1px solid #e2e8f0;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .wishlist-header h2 {
          font-size: 1.15rem;
          font-weight: 700;
        }
        .close-btn {
          background: #f1f5f9;
          border: none;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          cursor: pointer;
        }
        .wishlist-items {
          flex: 1;
          overflow-y: auto;
          padding: 1rem 1.5rem;
        }
        .wishlist-item {
          display: flex;
          gap: 1rem;
          margin-bottom: 1rem;
          border-bottom: 1px solid #f1f5f9;
          padding-bottom: 1rem;
          position: relative;
          align-items: center;
        }
        .wishlist-item-img {
          width: 64px;
          height: 64px;
          object-fit: cover;
          border-radius: 6px;
        }
        .wishlist-item-details {
          flex: 1;
        }
        .wishlist-item-details h4 {
          font-size: 0.9rem;
          font-weight: 700;
          margin-bottom: 0.2rem;
        }
        .price {
          font-weight: 700;
          color: var(--color-primary);
          font-size: 0.9rem;
          margin-bottom: 0.3rem;
        }
        .remove-btn {
          background: none;
          border: none;
          cursor: pointer;
          font-size: 1rem;
        }
        .empty-wishlist {
          padding: 4rem 1rem;
          text-align: center;
        }
        .empty-icon {
          font-size: 3rem;
          display: block;
          margin-bottom: 0.5rem;
        }
        .empty-wishlist h4 {
          font-size: 1.1rem;
          margin-bottom: 0.3rem;
        }
        .empty-wishlist p {
          color: var(--color-text-light);
          font-size: 0.88rem;
        }
        .btn-sm {
          padding: 0.35rem 0.75rem;
          font-size: 0.8rem;
        }
      `}</style>
        </div>
    );
};

export default WishlistModal;
