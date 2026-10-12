import React from 'react';
import { useShop } from '../context/ShopContext';
import ProductCard from './ProductCard';

const categories = [
  'All',
  'Vegetable Seeds',
  'Flower Seeds',
  'Fruit Seeds',
  'Herb Seeds',
  'Organic Seeds',
  'Flowering Plants',
  'Gardening Seeds'
];

const ProductList = () => {
  const {
    products,
    loadingProducts,
    selectedCategory,
    setSelectedCategory,
    searchQuery,
    setSearchQuery,
    maxPriceFilter,
    setMaxPriceFilter,
    sortBy,
    setSortBy,
    openProductDetails
  } = useShop();

  return (
    <div id="products" className="container product-section">
      <div className="section-title">
        <h2>Seedora Organic Seed Catalog</h2>
        <p>100% Non-GMO, Open-Pollinated & High-Germination Premium Seeds</p>
      </div>

      <div className="filter-panel">
        <div className="filter-categories">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="filter-controls">
          <div className="search-filter-box">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder="Search seeds by name, category..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button className="clear-search" onClick={() => setSearchQuery('')}>×</button>
            )}
          </div>

          <div className="price-filter-box">
            <label>Max Price: <strong>₹{maxPriceFilter}</strong></label>
            <input
              type="range"
              min="50"
              max="1000"
              step="10"
              value={maxPriceFilter}
              onChange={(e) => setMaxPriceFilter(Number(e.target.value))}
            />
          </div>

          <div className="sort-filter-box">
            <label>Sort By:</label>
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="default">Featured / Default</option>
              <option value="price_asc">Price: Low to High</option>
              <option value="price_desc">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
              <option value="name">Alphabetical (A-Z)</option>
            </select>
          </div>
        </div>
      </div>

      {loadingProducts ? (
        <div className="loading-state">
          <div className="spinner"></div>
          <p>Loading organic seeds from catalog...</p>
        </div>
      ) : products.length === 0 ? (
        <div className="empty-products-state">
          <span className="empty-icon">🌱</span>
          <h3>No seeds match your criteria</h3>
          <p>Try clearing your search query or adjusting category and price filters.</p>
          <button
            className="btn btn-outline"
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('All');
              setMaxPriceFilter(1000);
              setSortBy('default');
            }}
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard
              key={product._id || product.id}
              product={product}
              onViewDetails={openProductDetails}
            />
          ))}
        </div>
      )}

      <style jsx>{`
        .product-section {
          padding: 2.5rem 1rem;
        }
        .section-title {
          text-align: center;
          margin-bottom: 2rem;
        }
        .section-title h2 {
          font-size: 2.2rem;
          color: var(--color-text);
          font-weight: 800;
        }
        .section-title p {
          color: var(--color-text-light);
          font-size: 1.05rem;
        }
        .filter-panel {
          background: white;
          padding: 1.5rem;
          border-radius: var(--radius);
          box-shadow: var(--shadow-sm);
          margin-bottom: 2.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .filter-categories {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
          justify-content: center;
        }
        .filter-btn {
          background: #f1f5f9;
          border: 1px solid #cbd5e1;
          color: var(--color-text);
          padding: 0.45rem 1.1rem;
          border-radius: 999px;
          font-size: 0.88rem;
          font-weight: 500;
          transition: all 0.2s ease;
          cursor: pointer;
        }
        .filter-btn:hover {
          background: var(--color-bg);
          color: var(--color-primary);
          border-color: var(--color-primary);
        }
        .filter-btn.active {
          background-color: var(--color-primary);
          color: white;
          border-color: var(--color-primary);
          box-shadow: var(--shadow-sm);
        }
        .filter-controls {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          padding-top: 1rem;
          border-top: 1px solid #f1f5f9;
        }
        .search-filter-box {
          position: relative;
          display: flex;
          align-items: center;
          flex: 1;
          min-width: 220px;
        }
        .search-icon {
          position: absolute;
          left: 0.75rem;
          font-size: 0.9rem;
          color: #94a3b8;
        }
        .search-filter-box input {
          width: 100%;
          padding: 0.5rem 2rem 0.5rem 2.2rem;
          border: 1px solid #cbd5e1;
          border-radius: var(--radius);
          font-size: 0.9rem;
        }
        .clear-search {
          position: absolute;
          right: 0.6rem;
          background: none;
          border: none;
          font-size: 1.1rem;
          color: #94a3b8;
          cursor: pointer;
        }
        .price-filter-box {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.9rem;
        }
        .price-filter-box input[type="range"] {
          accent-color: var(--color-primary);
          cursor: pointer;
        }
        .sort-filter-box {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.9rem;
        }
        .sort-filter-box select {
          padding: 0.5rem 0.75rem;
          border: 1px solid #cbd5e1;
          border-radius: var(--radius);
          font-size: 0.9rem;
          outline: none;
          background: white;
        }
        .product-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 2rem;
        }
        .loading-state, .empty-products-state {
          text-align: center;
          padding: 4rem 1rem;
          background: white;
          border-radius: var(--radius);
          box-shadow: var(--shadow-sm);
        }
        .spinner {
          width: 40px;
          height: 40px;
          border: 4px solid #e2e8f0;
          border-top: 4px solid var(--color-primary);
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin: 0 auto 1rem auto;
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .empty-icon {
          font-size: 3rem;
          display: block;
          margin-bottom: 0.5rem;
        }
        .empty-products-state h3 {
          font-size: 1.3rem;
          margin-bottom: 0.4rem;
        }
        .empty-products-state p {
          color: var(--color-text-light);
          margin-bottom: 1.25rem;
        }
      `}</style>
    </div>
  );
};

export default ProductList;
