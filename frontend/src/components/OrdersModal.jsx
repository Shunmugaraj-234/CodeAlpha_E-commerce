import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';

const OrdersModal = () => {
  const {
    isOrdersOpen,
    closeOrders,
    orders,
    cancelUserOrder,
    fetchProducts
  } = useShop();

  if (!isOrdersOpen) return null;

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Confirmed':
      case 'Processing':
        return <span className="status-badge status-blue">🔵 {status}</span>;
      case 'Shipped':
        return <span className="status-badge status-purple">🚚 Shipped</span>;
      case 'Delivered':
        return <span className="status-badge status-green">✅ Delivered</span>;
      case 'Cancelled':
        return <span className="status-badge status-red">❌ Cancelled</span>;
      default:
        return <span className="status-badge status-yellow">⏳ {status}</span>;
    }
  };

  const handleCancel = async (orderId) => {
    if (window.confirm('Are you sure you want to cancel this order?')) {
      await cancelUserOrder(orderId);
      await fetchProducts();
    }
  };

  return (
    <div className="modal-overlay" onClick={closeOrders}>
      <div className="orders-card fade-in" onClick={(e) => e.stopPropagation()}>
        <div className="orders-header">
          <h3>📦 Seedora Order History ({orders.length})</h3>
          <button className="close-btn" onClick={closeOrders}>✕</button>
        </div>

        {orders.length === 0 ? (
          <div className="empty-orders">
            <span className="empty-icon">🌱</span>
            <h4>No orders placed yet</h4>
            <p>Your previous seed orders and shipping status will appear here.</p>
            <button className="btn btn-primary" onClick={closeOrders}>
              Explore Seedora Catalog
            </button>
          </div>
        ) : (
          <div className="orders-list">
            {orders.map((ord) => {
              const dateStr = new Date(ord.createdAt).toLocaleDateString('en-IN', {
                year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'
              });

              return (
                <div key={ord._id} className="order-item-card">
                  <div className="order-card-header">
                    <div>
                      <span className="order-id">Order #{ord._id.substring(0, 10)}...</span>
                      <span className="order-date">{dateStr}</span>
                    </div>
                    {getStatusBadge(ord.orderStatus)}
                  </div>

                  <div className="order-products">
                    {ord.items.map((it, idx) => (
                      <div key={idx} className="ord-prod-row">
                        <img
                          src={it.image}
                          alt={it.name}
                          className="ord-thumb"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f1f8e9'/%3E%3Cpath d='M200 80 C 140 140, 140 220, 200 220 C 260 220, 260 140, 200 80 Z' fill='%23388e3c' opacity='0.75'/%3E%3Cpath d='M200 110 L200 200' stroke='%23ffffff' stroke-width='4' stroke-linecap='round'/%3E%3Ctext x='50%25' y='85%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-weight='bold' font-size='16' fill='%231b5e20'%3EOrganic Seedora%3C/text%3E%3C/svg%3E";
                          }}
                        />
                        <div className="ord-prod-info">
                          <span className="ord-prod-name">{it.name}</span>
                          <span className="ord-prod-qty">Qty: {it.quantity} × ₹{Number(it.price)}</span>
                        </div>
                        <span className="ord-prod-total">₹{it.price * it.quantity}</span>
                      </div>
                    ))}
                  </div>

                  <div className="order-card-footer">
                    <div className="footer-meta">
                      <span>Payment: <strong>{ord.paymentMethod}</strong> {ord.upiId ? `(${ord.upiId})` : ''}</span>
                      <span>Total: <strong className="total-price">₹{Number(ord.totalAmount)}</strong></span>
                    </div>

                    {ord.orderStatus !== 'Delivered' && ord.orderStatus !== 'Cancelled' && (
                      <button
                        className="btn btn-outline btn-sm cancel-btn"
                        onClick={() => handleCancel(ord._id)}
                      >
                        Cancel Order
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
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
        .orders-card {
          background: white;
          width: 100%;
          max-width: 720px;
          border-radius: 12px;
          padding: 1.5rem;
          position: relative;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.2);
          max-height: 85vh;
          display: flex;
          flex-direction: column;
        }
        .orders-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 1rem;
          border-bottom: 1px solid #e2e8f0;
          margin-bottom: 1rem;
        }
        .orders-header h3 {
          font-size: 1.25rem;
          font-weight: 700;
        }
        .close-btn {
          background: #f1f5f9;
          border: none;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          cursor: pointer;
        }
        .empty-orders {
          text-align: center;
          padding: 4rem 1rem;
        }
        .empty-icon {
          font-size: 3rem;
          display: block;
          margin-bottom: 0.5rem;
        }
        .empty-orders h4 {
          font-size: 1.2rem;
          margin-bottom: 0.3rem;
        }
        .empty-orders p {
          color: var(--color-text-light);
          margin-bottom: 1.5rem;
        }
        .orders-list {
          flex: 1;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .order-item-card {
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          padding: 1rem;
          background: #f8fafc;
        }
        .order-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid #cbd5e1;
          padding-bottom: 0.6rem;
          margin-bottom: 0.75rem;
        }
        .order-id {
          font-weight: 700;
          color: var(--color-text);
          display: block;
          font-size: 0.95rem;
        }
        .order-date {
          font-size: 0.78rem;
          color: var(--color-text-light);
        }
        .status-badge {
          font-size: 0.78rem;
          font-weight: 700;
          padding: 0.25rem 0.65rem;
          border-radius: 999px;
        }
        .status-blue { background: #dbeafe; color: #1e40af; }
        .status-purple { background: #f3e8ff; color: #6b21a8; }
        .status-green { background: #dcfce7; color: #166534; }
        .status-red { background: #fee2e2; color: #991b1b; }
        .status-yellow { background: #fef3c7; color: #92400e; }

        .order-products {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          margin-bottom: 0.75rem;
        }
        .ord-prod-row {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.88rem;
        }
        .ord-thumb {
          width: 42px;
          height: 42px;
          object-fit: cover;
          border-radius: 4px;
        }
        .ord-prod-info {
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        .ord-prod-name {
          font-weight: 600;
        }
        .ord-prod-qty {
          font-size: 0.78rem;
          color: var(--color-text-light);
        }
        .ord-prod-total {
          font-weight: 700;
          color: var(--color-text);
        }
        .order-card-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 1px dashed #cbd5e1;
          padding-top: 0.6rem;
          font-size: 0.88rem;
        }
        .footer-meta {
          display: flex;
          gap: 1rem;
        }
        .total-price {
          color: var(--color-primary);
          font-size: 1rem;
        }
        .cancel-btn {
          color: #dc2626;
          border-color: #fca5a5;
        }
        .cancel-btn:hover {
          background: #fee2e2;
        }
      `}</style>
    </div>
  );
};

export default OrdersModal;
