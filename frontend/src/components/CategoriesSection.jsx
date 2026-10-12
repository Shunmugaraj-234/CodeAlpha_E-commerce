import React from 'react';
import { useShop } from '../context/ShopContext';

const categoryData = [
  {
    title: 'Vegetable Seeds',
    icon: '🥦',
    desc: 'Nutritious & delicious veggies',
    image: 'https://images.unsplash.com/photo-1592841200221-a6898f307baa?auto=format&fit=crop&q=80&w=400'
  },
  {
    title: 'Flower Seeds',
    icon: '🌻',
    desc: 'Vibrant blooms & pollinators',
    image: 'https://images.unsplash.com/photo-1470509037663-253afd7f0f51?auto=format&fit=crop&q=80&w=400'
  },
  {
    title: 'Herb Seeds',
    icon: '🌿',
    desc: 'Fresh culinary & aromatic herbs',
    image: 'https://images.unsplash.com/photo-1618375569909-3c8616cf7733?auto=format&fit=crop&q=80&w=400'
  },
  {
    title: 'Organic Seeds',
    icon: '🏷️',
    desc: '100% Certified Non-GMO',
    image: 'https://images.unsplash.com/photo-1498579809087-ef1e558fd1da?auto=format&fit=crop&q=80&w=400'
  },
  {
    title: 'Fruit Seeds',
    icon: '🍓',
    desc: 'Juicy berries & watermelons',
    image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&q=80&w=400'
  },
  {
    title: 'Flowering Plants',
    icon: '🌺',
    desc: 'Perennials & house blooms',
    image: 'https://images.unsplash.com/photo-1597826368522-9f4a332c3f81?auto=format&fit=crop&q=80&w=400'
  },
  {
    title: 'Gardening Seeds',
    icon: '🌱',
    desc: 'Easy-grow beginner packs',
    image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&q=80&w=400'
  }
];

const CategoriesSection = () => {
  const { setSelectedCategory } = useShop();

  const handleSelect = (categoryName) => {
    setSelectedCategory(categoryName);
    const elem = document.getElementById('products');
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="categories-section container">
      <div className="section-header">
        <h2>Explore Seed Categories</h2>
        <p>Discover non-GMO, high-germination premium seeds tailored for your garden</p>
      </div>

      <div className="categories-grid">
        {categoryData.map((cat) => (
          <div
            key={cat.title}
            className="category-card"
            onClick={() => handleSelect(cat.title)}
          >
            <div className="card-bg" style={{ backgroundImage: `url(${cat.image})` }}></div>
            <div className="card-overlay"></div>
            <div className="card-info">
              <span className="cat-icon">{cat.icon}</span>
              <h3>{cat.title}</h3>
              <p>{cat.desc}</p>
              <span className="browse-link">Shop Category &rarr;</span>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .categories-section {
          padding: 3.5rem 1rem 1.5rem 1rem;
        }
        .section-header {
          text-align: center;
          margin-bottom: 2.5rem;
        }
        .section-header h2 {
          font-size: 2rem;
          color: var(--color-text);
          font-weight: 700;
          margin-bottom: 0.5rem;
        }
        .section-header p {
          color: var(--color-text-light);
          font-size: 1rem;
        }
        .categories-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
          gap: 1.5rem;
        }
        .category-card {
          position: relative;
          height: 180px;
          border-radius: var(--radius);
          overflow: hidden;
          cursor: pointer;
          box-shadow: var(--shadow-sm);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .category-card:hover {
          transform: translateY(-6px);
          box-shadow: var(--shadow-lg);
        }
        .card-bg {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          transition: transform 0.5s ease;
        }
        .category-card:hover .card-bg {
          transform: scale(1.1);
        }
        .card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(27, 67, 50, 0.4) 0%, rgba(27, 67, 50, 0.85) 100%);
        }
        .card-info {
          position: relative;
          z-index: 10;
          padding: 1.25rem;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          color: white;
        }
        .cat-icon {
          font-size: 1.8rem;
          margin-bottom: 0.3rem;
        }
        .card-info h3 {
          font-size: 1.15rem;
          font-weight: 700;
          margin-bottom: 0.2rem;
        }
        .card-info p {
          font-size: 0.82rem;
          opacity: 0.9;
          margin-bottom: 0.5rem;
        }
        .browse-link {
          font-size: 0.82rem;
          font-weight: 600;
          color: #a7f3d0;
          transition: transform 0.2s;
        }
        .category-card:hover .browse-link {
          transform: translateX(4px);
        }
      `}</style>
    </section>
  );
};

export default CategoriesSection;
