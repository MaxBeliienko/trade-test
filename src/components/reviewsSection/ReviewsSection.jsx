import styles from './ReviewsSection.module.css';
import reviewsData from '../../mock/reviews-data.json';
import avatar1 from '../../assets/avatar1.png';
import avatar2 from '../../assets/avatar2.png';
import avatar3 from '../../assets/avatar3.png';
import avatar4 from '../../assets/avatar4.png';
import { useState } from 'react';

const ReviewsSection = () => {
  const [visibleReviews, setVisibleReviews] = useState(4);
  const avatars = {
    '@ArtemGuriev': avatar1,
    '@KPrmie': avatar2,
    '@VlMagin': avatar3,
    '@SanyaMnS': avatar4,
    '@User1': avatar1,
    '@User2': avatar2,
    '@User3': avatar3,
    '@User4': avatar4,
  };

  const handleLoadMore = () => {
    setVisibleReviews(reviewsData.length);
  };

  return (
    <section className={styles['reviews-section']} id="reviews">
      <h2>Отзывы участников комьюнити</h2>
      <ul className={styles['reviews-list']}>
        {reviewsData.slice(0, visibleReviews).map((review, index) => (
          <li key={index} className={styles['review-item']}>
            <img
              src={avatars[review.author]}
              alt={`Avatar of ${review.author}`}
              className={styles.avatar}
            />
            <div className={styles['review-header']}>
              <h3>{review.author}</h3>
              <p className={styles.subtitle}>{review.info}</p>
              <p className={styles['review-text']}>{review.text}</p>
            </div>
          </li>
        ))}
      </ul>
      {visibleReviews < reviewsData.length && (
        <button className={styles['load-more-button']} onClick={handleLoadMore}>
          Загрузить больше отзывов
        </button>
      )}
    </section>
  );
};

export default ReviewsSection;
