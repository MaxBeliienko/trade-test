import styles from './PricesSection.module.css';
import check from '../../assets/check.svg';
import { useState } from 'react';
import CustomDropdown from './customDropdown/CustomDropdown';

const TariffCard = ({ title, basePrice, features, discount }) => {
  const [months, setMonths] = useState(12);
  const monthOptions = [3, 6, 12];

  const calculatePrice = () => {
    const discounte = months === 6 ? 0.6 : months === 3 ? 0.3 : 1;
    return Math.round(basePrice * discounte);
  };
  return (
    <div className={styles['tariff-card']}>
      <div>
        <h3>{title}</h3>
        <ul>
          {features.map((feature, index) => (
            <li key={index}>
              <img src={check} alt="" className={styles['check-image']} />
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <div className={styles['price-container']}>
          <p>
            ${calculatePrice()} <span>{discount}</span>
          </p>
          <CustomDropdown
            options={monthOptions}
            selectedValue={months}
            onSelect={setMonths}
          />
        </div>
        <button>
          Попробовать <span>5 дней бесплатно</span>
        </button>
      </div>
    </div>
  );
};

export default TariffCard;
