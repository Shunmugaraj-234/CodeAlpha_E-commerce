import React from 'react';

const reviews = [
  {
    name: 'Sarah Jenkins',
    location: 'Oregon, USA',
    rating: 5,
    comment: 'The Heirloom Tomato seeds sprouted in less than 5 days! Incredible germination rate. Will definitely buy again.',
    avatar: '👩‍🌾'
  },
  {
    name: 'Marcus Vance',
    location: 'California, USA',
    rating: 5,
    comment: 'Organic Basil & Lavender seeds produced the most fragrant kitchen herb garden. Fast shipping & eco packaging!',
    avatar: '👨‍🌾'
  },
  {
    name: 'Emily Watson',
    location: 'Vermont, USA',
    rating: 5,
    comment: 'The Pollinator Wildflower Mix transformed my backyard into a paradise for bees and butterflies. Highly recommend!',
    avatar: '🐝'
  }
];

const ReviewsSection = () => {
  return (
    <section className="reviews-section container">
      <div className="section-title">
        <h2>What Our Gardeners Say</h2>
        <p>Loved by over 10,000+ organic gardeners nationwide</p>
      </div>

      <div className="reviews-grid">
        {reviews.map((rev, index) => (
          <div key={index} className="review-card">
            <div className="review-stars">{'★'.repeat(rev.rating)}</div>
            <p className="comment">"{rev.comment}"</p>
            <div className="reviewer-info">
              <span className="avatar">{rev.avatar}</span>
              <div>
                <h4>{rev.name}</h4>
                <span className="location">{rev.location}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .reviews-section {
          padding: 4rem 1rem;
        }
        .section-title {
          text-align: center;
          margin-bottom: 2.5rem;
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
        .reviews-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }
        .review-card {
          background: white;
          padding: 1.75rem;
          border-radius: var(--radius);
          box-shadow: var(--shadow-sm);
          border: 1px solid #e2e8f0;
          display: flex;
          flex-direction: column;
        }
        .review-stars {
          color: #f59e0b;
          font-size: 1.1rem;
          margin-bottom: 0.8rem;
        }
        .comment {
          font-size: 0.95rem;
          color: #475569;
          font-style: italic;
          line-height: 1.5;
          margin-bottom: 1.5rem;
          flex: 1;
        }
        .reviewer-info {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .avatar {
          font-size: 1.8rem;
        }
        .reviewer-info h4 {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--color-text);
        }
        .location {
          font-size: 0.78rem;
          color: var(--color-text-light);
        }
      `}</style>
    </section>
  );
};

export default ReviewsSection;
