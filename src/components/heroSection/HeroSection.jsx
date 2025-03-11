import styles from './HeroSection.module.css';
import { useState } from 'react';

const HeroSection = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = event => {
    setEmail(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log('Відправка email:', email);
    setEmail('');
  };

  return (
    <section className={styles['hero-section']} id="hero">
      <div className={styles.container}>
        <div className={styles['main-block']}>
          <div className={styles.content}>
            <h2 className={styles.title}>ETH/USDT</h2>
            <p className={styles.type}>Short</p>
            <p className={styles.percentage}>+141%</p>
          </div>
        </div>
        <div className={styles['animated-block']}>
          <div className={styles.content}>
            <h2 className={`${styles.title} ${styles.top}`}>ETH/USDT</h2>
            <p className={`${styles.type} ${styles.top}`}>Short</p>
            <p className={`${styles.percentage} ${styles.top}`}>+116%</p>
          </div>
        </div>
      </div>
      <div className={styles['hero-info-container']}>
        <h1>моментально Копируй сделки профи трейдеров</h1>
        <p>
          Начни копировать сделки с успешной командой профессиональных трейдеров
          в автоматическом режиме.
        </p>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Ваш e–mail"
            className={styles['hero-email-input']}
          />
          <button type="submit" className={styles['form-button']}>
            начать
          </button>
        </form>
        <span>5 дней бесплатного пользования</span>
      </div>
    </section>
  );
};

export default HeroSection;
