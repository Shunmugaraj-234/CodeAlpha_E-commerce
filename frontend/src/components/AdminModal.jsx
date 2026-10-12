import React, { useState, useEffect } from 'react';
import { useShop } from '../context/ShopContext';

const API_BASE_URL = 'http://localhost:5000/api';

const AdminModal = () => {
  const {
    isAdminOpen,
    closeAdmin,
    products,
    fetchProducts,
    token,
    showNotification
  } = useShop();

  const [tab, setTab] = useState('products');
  const [adminOrders, setAdminOrders] = useState([]);

  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  const [name, setName] = useState('');
  const [category, setCategory] = useState('Vegetable Seeds');
  const [price, setPrice] = useState('');
  const [originalPrice, setOriginalPrice] = useState('');
  const [stock, setStock] = useState('50');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [brand, setBrand] = useState('GreenThumb Organics');
  const [season, setSeason] = useState('Spring / Summer');
  const [soilType, setSoilType] = useState('Well-draining fertile soil');
  const [growingInstructions, setGrowingInstructions] = useState('');

  const fetchAdminOrders = async () => {
    if (!token) return;
    try {
      const res = await fetch(`${API_BASE_URL}/orders`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (res.ok) {
        const data = await res.json();
        setAdminOrders(data);
      }
    } catch (err) {
      console.error('Fetch admin orders error:', err);
    }
  };

  useEffect(() => {
    if (isAdminOpen && tab === 'orders') {
      fetchAdminOrders();
    }
  }, [isAdminOpen, tab]);

  if (!isAdminOpen) return null;

  const resetForm = () => {
    setIsEditing(false);
    setEditId(null);
    setName('');
    setCategory('Vegetable Seeds');
    setPrice('');
    setOriginalPrice('');
    setStock('50');
    setImage('');
    setDescription('');
    setBrand('GreenThumb Organics');
    setSeason('Spring / Summer');
    setSoilType('Well-draining fertile soil');
    setGrowingInstructions('');
  };

  const handleEditClick = (p) => {
    setIsEditing(true);
    setEditId(p._id || p.id);
    setName(p.name);
    setCategory(p.category);
    setPrice(p.price);
    setOriginalPrice(p.originalPrice || Math.round(Number(p.price) * 1.4));
    setStock(p.stock !== undefined ? p.stock : 50);
    setImage(p.image);
    setDescription(p.description || '');
    setBrand(p.brand || 'GreenThumb Organics');
    setSeason(p.season || 'Spring / Summer');
    setSoilType(p.soilType || 'Well-draining fertile soil');
    setGrowingInstructions(p.growingInstructions || '');
  };

  const handleDeleteClick = async (pId) => {
    if (!window.confirm('Are you sure you want to delete this product?')) return;
    try {
      const res = await fetch(`${API_BASE_URL}/products/${pId}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message);
      showNotification('Product deleted');
      fetchProducts();
    } catch (err) {
      showNotification(err.message, 'error');
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      name,
      category,
      price: Number(price),
      originalPrice: Number(originalPrice || Math.round(Number(price) * 1.4)),
      stock: Number(stock),
      image,
      description,
      brand,
      season,
      soilType,
      growingInstructions
    };

    try {
      const url = isEditing
        ? `${API_BASE_URL}/products/${editId}`
        : `${API_BASE_URL}/products`;

      const method = isEditing ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(payload)
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message);

      showNotification(isEditing ? 'Product updated successfully!' : 'New product created!');
      resetForm();
      fetchProducts();
    } catch (err) {
      showNotification(err.message, 'error');
    }
  };

  const handleStatusChange = async (orderId, newStatus) => {
    try {
      const res = await fetch(`${API_BASE_URL}/orders/${orderId}/status`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ status: newStatus })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message);
      showNotification(`Order status updated to ${newStatus}`);
      fetchAdminOrders();
    } catch (err) {
      showNotification(err.message, 'error');
    }
  };

  return (
    <div className="modal-overlay" onClick={closeAdmin}>
      <div className="admin-card fade-in" onClick={(e) => e.stopPropagation()}>
        <div className="admin-header">
          <h3>⚙️ Seedora Admin Dashboard</h3>
          <button className="close-btn" onClick={closeAdmin}>✕</button>
        </div>

        <div className="admin-tabs">
          <button
            className={tab === 'products' ? 'active' : ''}
            onClick={() => setTab('products')}
          >
            🌱 Manage Seed Products ({products.length})
          </button>
          <button
            className={tab === 'orders' ? 'active' : ''}
            onClick={() => setTab('orders')}
          >
            📦 Customer Orders ({adminOrders.length})
          </button>
        </div>

        {tab === 'products' ? (
          <div className="admin-content-grid">
            <form className="admin-form" onSubmit={handleFormSubmit}>
              <h4>{isEditing ? 'Edit Product' : 'Add New Seed Product'}</h4>

              <div className="form-group">
                <label>Product Name *</label>
                <input
                  type="text"
                  placeholder="e.g. Organic Bell Pepper Seeds"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group flex-1">
                  <label>Category *</label>
                  <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="Vegetable Seeds">Vegetable Seeds</option>
                    <option value="Flower Seeds">Flower Seeds</option>
                    <option value="Fruit Seeds">Fruit Seeds</option>
                    <option value="Herb Seeds">Herb Seeds</option>
                    <option value="Organic Seeds">Organic Seeds</option>
                    <option value="Flowering Plants">Flowering Plants</option>
                    <option value="Gardening Seeds">Gardening Seeds</option>
                  </select>
                </div>
                <div className="form-group flex-1">
                  <label>Offer Price (₹) *</label>
                  <input
                    type="number"
                    placeholder="199"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group flex-1">
                  <label>MRP (₹)</label>
                  <input
                    type="number"
                    placeholder="299"
                    value={originalPrice}
                    onChange={(e) => setOriginalPrice(e.target.value)}
                  />
                </div>
                <div className="form-group flex-1">
                  <label>Stock Qty *</label>
                  <input
                    type="number"
                    placeholder="50"
                    value={stock}
                    onChange={(e) => setStock(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Image URL *</label>
                <input
                  type="text"
                  placeholder="https://images.unsplash.com/photo-..."
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group flex-1">
                  <label>Brand / Supplier</label>
                  <input
                    type="text"
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                  />
                </div>
                <div className="form-group flex-1">
                  <label>Growing Season</label>
                  <input
                    type="text"
                    value={season}
                    onChange={(e) => setSeason(e.target.value)}
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Description</label>
                <textarea
                  rows="2"
                  placeholder="Short marketing description..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Growing Instructions</label>
                <textarea
                  rows="2"
                  placeholder="Sow 1/4 inch deep in sunny soil..."
                  value={growingInstructions}
                  onChange={(e) => setGrowingInstructions(e.target.value)}
                />
              </div>

              <div className="form-actions">
                {isEditing && (
                  <button type="button" className="btn btn-outline" onClick={resetForm}>
                    Cancel Edit
                  </button>
                )}
                <button type="submit" className="btn btn-primary flex-1">
                  {isEditing ? 'Save Product Changes' : 'Add Product'}
                </button>
              </div>
            </form>

            <div className="admin-prod-list">
              <h4>Catalog Inventory</h4>
              <div className="prod-scroll">
                {products.map((p) => {
                  const pId = p._id || p.id;
                  return (
                    <div key={pId} className="admin-prod-item">
                      <img src={p.image} alt={p.name} />
                      <div className="item-info">
                        <strong>{p.name}</strong>
                        <span>{p.category} | ₹{Number(p.price)} | Stock: {p.stock !== undefined ? p.stock : 50}</span>
                      </div>
                      <div className="item-btns">
                        <button className="btn-edit" onClick={() => handleEditClick(p)}>✏️</button>
                        <button className="btn-delete" onClick={() => handleDeleteClick(pId)}>🗑️</button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ) : (
          <div className="admin-orders-list">
            <h4>Manage All Customer Orders</h4>
            {adminOrders.length === 0 ? (
              <p>No customer orders placed yet.</p>
            ) : (
              <div className="orders-scroll">
                {adminOrders.map((ord) => (
                  <div key={ord._id} className="admin-order-row">
                    <div className="order-main">
                      <strong>Order #{ord._id}</strong>
                      <span>Customer: {ord.shippingAddress.fullName} ({ord.shippingAddress.email})</span>
                      <span>Total: <strong>₹{Number(ord.totalAmount)}</strong> ({ord.paymentMethod})</span>
                    </div>

                    <div className="status-updater">
                      <label>Status:</label>
                      <select
                        value={ord.orderStatus}
                        onChange={(e) => handleStatusChange(ord._id, e.target.value)}
                      >
                        <option value="Pending">Pending</option>
                        <option value="Confirmed">Confirmed</option>
                        <option value="Processing">Processing</option>
                        <option value="Shipped">Shipped</option>
                        <option value="Delivered">Delivered</option>
                        <option value="Cancelled">Cancelled</option>
                      </select>
                    </div>
                  </div>
                ))}
              </div>
            )}
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
        .admin-card {
          background: white;
          width: 100%;
          max-width: 960px;
          border-radius: 12px;
          padding: 1.5rem;
          position: relative;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.2);
          max-height: 90vh;
          display: flex;
          flex-direction: column;
        }
        .admin-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid #e2e8f0;
          padding-bottom: 0.75rem;
          margin-bottom: 1rem;
        }
        .admin-header h3 {
          font-size: 1.25rem;
          color: var(--color-primary);
        }
        .close-btn {
          background: #f1f5f9;
          border: none;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          cursor: pointer;
        }
        .admin-tabs {
          display: flex;
          gap: 1rem;
          margin-bottom: 1.25rem;
          border-bottom: 2px solid #e2e8f0;
        }
        .admin-tabs button {
          background: none;
          border: none;
          padding: 0.6rem 1rem;
          font-weight: 700;
          font-size: 0.95rem;
          color: #64748b;
          border-bottom: 2px solid transparent;
          margin-bottom: -2px;
          cursor: pointer;
        }
        .admin-tabs button.active {
          color: var(--color-primary);
          border-bottom-color: var(--color-primary);
        }
        .admin-content-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 1.5rem;
          overflow-y: auto;
        }
        .admin-form {
          background: #f8fafc;
          padding: 1.25rem;
          border-radius: 8px;
          border: 1px solid #e2e8f0;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .admin-form h4 {
          font-size: 1.05rem;
          margin-bottom: 0.2rem;
        }
        .form-row {
          display: flex;
          gap: 0.6rem;
        }
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }
        .form-group label {
          font-size: 0.8rem;
          font-weight: 600;
        }
        .form-group input, .form-group select, .form-group textarea {
          padding: 0.5rem 0.65rem;
          border: 1px solid #cbd5e1;
          border-radius: var(--radius);
          font-size: 0.88rem;
          outline: none;
        }
        .form-actions {
          display: flex;
          gap: 0.5rem;
          margin-top: 0.5rem;
        }
        .admin-prod-list {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .prod-scroll {
          max-height: 480px;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }
        .admin-prod-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.6rem;
          border: 1px solid #e2e8f0;
          border-radius: 6px;
          background: white;
        }
        .admin-prod-item img {
          width: 44px;
          height: 44px;
          object-fit: cover;
          border-radius: 4px;
        }
        .item-info {
          flex: 1;
          display: flex;
          flex-direction: column;
          font-size: 0.82rem;
        }
        .item-info strong {
          color: var(--color-text);
        }
        .item-btns {
          display: flex;
          gap: 0.3rem;
        }
        .btn-edit, .btn-delete {
          background: #f1f5f9;
          border: none;
          padding: 0.35rem;
          border-radius: 4px;
          cursor: pointer;
        }
        .orders-scroll {
          max-height: 480px;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }
        .admin-order-row {
          background: #f8fafc;
          border: 1px solid #cbd5e1;
          border-radius: 8px;
          padding: 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .order-main {
          display: flex;
          flex-direction: column;
          font-size: 0.88rem;
          gap: 0.2rem;
        }
        .status-updater {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .status-updater select {
          padding: 0.4rem 0.6rem;
          border-radius: 4px;
          border: 1px solid #cbd5e1;
          font-weight: bold;
        }
        .flex-1 { flex: 1; }

        @media (max-width: 768px) {
          .admin-content-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default AdminModal;
