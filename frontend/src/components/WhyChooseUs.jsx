import React from 'react';

const features = [
  {
    icon: '🌱',
    title: '100% Non-GMO & Organic',
    desc: 'All our seeds are open-pollinated, non-hybrid, and certified organic free from synthetic chemicals.'
  },
  {
    icon: '⚡',
    title: 'High Germination Guarantee',
    desc: 'Lab-tested with 95%+ germination rates so your garden sprouts lush and healthy.'
  },
  {
    icon: '🚚',
    title: 'Eco-Friendly Fast Shipping',
    desc: 'Delivered in 100% biodegradable packaging with fast, tracked shipping right to your door.'
  },
  {
    icon: '📖',
    title: 'Expert Planting Advice',
    desc: 'Detailed soil preparation and growing guides included with every single packet.'
  }
];

const WhyChooseUs = () => {
  return (
    <section className="why-us-section">
      <div className="container">
        <div className="section-title">
          <h2>Why Choose SeedShop?</h2>
          <p>We are dedicated to nourishing home gardens and organic farming communities</p>
        </div>

        <div className="features-grid">
          {features.map((f, i) => (
            <div key={i} className="feature-card">
              <span className="feature-icon">{f.icon}</span>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .why-us-section {
          padding: 4rem 1rem;
          background: white;
          border-top: 1px solid #f1f5f9;
          border-bottom: 1px solid #f1f5f9;
        }
        .section-title {
          text-align: center;
          margin-bottom: 3rem;
        }
        .section-title h2 {
          font-size: 2rem;
          font-weight: 800;
          color: var(--color-text);
          margin-bottom: 0.5rem;
        }
        .section-title p {
          color: var(--color-text-light);
          font-size: 1rem;
        }
        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 2rem;
        }
        .feature-card {
          padding: 2rem 1.5rem;
          background: #f8fafc;
          border-radius: var(--radius);
          text-align: center;
          border: 1px solid #e2e8f0;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .feature-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(46, 125, 50, 0.08);
          border-color: var(--color-primary);
        }
        .feature-icon {
          font-size: 2.5rem;
          display: block;
          margin-bottom: 1rem;
        }
        .feature-card h3 {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--color-text);
          margin-bottom: 0.5rem;
        }
        .feature-card p {
          font-size: 0.88rem;
          color: var(--color-text-light);
          line-height: 1.5;
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;
