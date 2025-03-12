import styles from './PricesSection.module.css';
import { useState } from 'react';
import TariffCard from './TariffCard';

const PricesSection = () => {
  const [typePlan, setTypePlan] = useState('spot');
  return (
    <section className={styles['prices-section-container']} id="tariffs">
      <h2>Тарифы</h2>
      <div className={styles['prices-button-wrapper']}>
        <button
          onClick={() => {
            setTypePlan('spot');
          }}
          className={typePlan === 'spot' ? styles.active : ''}
        >
          СПОТ
        </button>
        <button
          onClick={() => {
            setTypePlan('futures');
          }}
          className={typePlan === 'futures' ? styles.active : ''}
        >
          фьючерс
        </button>
      </div>
      <div className={styles['tariffs-container']}>
        <TariffCard
          title="STANDART"
          basePrice={typePlan === 'spot' ? 234 : 310}
          discount="-35%"
          features={[
            'Ручной трейдинг',
            'Автоматическое или полуавтоматическое копирование сделок',
            'Личный кабинет со статистикой',
            'Среднесрочные сделки с уровнями набора портфеля',
          ]}
        />

        <TariffCard
          title="VIP"
          basePrice={typePlan === 'spot' ? 585 : 720}
          discount="-35%"
          features={[
            'Ручной трейдинг',
            'Автоматическое или полуавтоматическое копирование сделок',
            'Личный кабинет со статистикой',
            'Краткосрочные, среднесрочные и инвест сделки',
            'Доступ в Vip чат с командой',
            'Наш авторский курс по трейдингу',
          ]}
        />
      </div>
    </section>
  );
};

export default PricesSection;
