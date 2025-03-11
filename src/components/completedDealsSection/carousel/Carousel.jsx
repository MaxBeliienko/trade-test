import { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import styles from './Carousel.module.css';
import dealsLogo from '../../../assets/deals-logo.png';

const Carousel = ({ data }) => {
  useEffect(() => {
    const swiper = new Swiper('.swiper', {
      slidesPerView: 3,
      spaceBetween: 30,
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        375: {
          slidesPerView: 1.2,
          spaceBetween: 20,
        },
        740: {
          slidesPerView: 2.2,
          spaceBetween: 30,
        },
        1440: {
          slidesPerView: 3.5,
          spaceBetween: 30,
        },
      },
    });
  }, []);

  return (
    <div className={`swiper ${styles['swiper-container']}`}>
      <div className="swiper-wrapper">
        {data.map((item, index) => (
          <div className={`swiper-slide ${styles['swiper-slide']}`} key={index}>
            <div>
              <h3 className={styles.title}>{item.currencyPair}</h3>
              <p className={styles.type}>{item.tradeType}</p>
            </div>
            <div>
              <p className={styles.profit}>
                Прибыль
                <span>{item.profit}</span>
              </p>
              <div className={styles['date-wrapper']}>
                <p className={styles.target}>{item.target}</p>
                <p className={styles.date}>{item.date}</p>
              </div>
            </div>

            <img src={dealsLogo} alt="logo" className={styles['deals-logo']} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
