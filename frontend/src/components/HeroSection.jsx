import React from 'react';

const HeroSection = () => {
    return (
        <section className="hero">
            <div className="container hero-content">
                <div className="hero-badge">🌱 Seedora — 100% Certified Organic & Non-GMO</div>
                <h1>Grow Your Own Organic Paradise with Seedora</h1>
                <p>Nourish your family with fresh vegetables, fragrant culinary herbs, and vibrant flowers grown directly from high-germination premium seeds.</p>

                <div className="hero-actions">
                    <button
                        className="btn btn-accent btn-lg hero-cta"
                        onClick={() => document.getElementById('products').scrollIntoView({ behavior: 'smooth' })}
                    >
                        Explore Seed Catalog &rarr;
                    </button>
                </div>

                <div className="hero-stats">
                    <div className="stat-item">
                        <span className="stat-num">98%+</span>
                        <span className="stat-lbl">Lab Germination Rate</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-num">100%</span>
                        <span className="stat-lbl">Open-Pollinated</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-num">Free</span>
                        <span className="stat-lbl">Shipping over ₹499</span>
                    </div>
                </div>
            </div>

            <style jsx>{`
        .hero {
          background: linear-gradient(180deg, rgba(27, 67, 50, 0.75) 0%, rgba(27, 67, 50, 0.88) 100%), url('https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&q=80&w=1400');
          background-size: cover;
          background-position: center;
          color: white;
          padding: 5.5rem 1rem 4.5rem 1rem;
          text-align: center;
          position: relative;
        }
        .hero-content {
          max-width: 800px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .hero-badge {
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(8px);
          padding: 0.4rem 1rem;
          border-radius: 999px;
          font-size: 0.88rem;
          font-weight: 700;
          letter-spacing: 0.5px;
          margin-bottom: 1.2rem;
          border: 1px solid rgba(255, 255, 255, 0.3);
        }
        .hero-content h1 {
          font-size: 3rem;
          font-weight: 800;
          margin-bottom: 1rem;
          line-height: 1.15;
          text-shadow: 0 2px 4px rgba(0,0,0,0.3);
        }
        .hero-content p {
          font-size: 1.15rem;
          margin-bottom: 2rem;
          line-height: 1.6;
          color: #d8f3dc;
          text-shadow: 0 1px 2px rgba(0,0,0,0.3);
        }
        .hero-actions {
          margin-bottom: 3rem;
        }
        .hero-cta {
          padding: 0.9rem 2.2rem;
          font-size: 1.05rem;
          border-radius: 999px;
          box-shadow: 0 10px 20px rgba(0,0,0,0.2);
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .hero-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 28px rgba(0,0,0,0.25);
        }
        .hero-stats {
          display: flex;
          gap: 3rem;
          border-top: 1px solid rgba(255, 255, 255, 0.2);
          padding-top: 2rem;
          width: 100%;
          justify-content: center;
        }
        .stat-item {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .stat-num {
          font-size: 1.8rem;
          font-weight: 800;
          color: #a7f3d0;
        }
        .stat-lbl {
          font-size: 0.82rem;
          color: #d8f3dc;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        @media (max-width: 650px) {
          .hero-content h1 {
            font-size: 2.1rem;
          }
          .hero-stats {
            flex-direction: column;
            gap: 1rem;
          }
        }
      `}</style>
        </section>
    );
};

export default HeroSection;
