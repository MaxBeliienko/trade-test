import styles from './AboutCompanySection.module.css';
import { useState } from 'react';

const AboutCompanySection = () => {
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
    <section className={styles['about-section-container']} id="company">
      <div className={styles['about-info']}>
        <h2>О компании</h2>
        <p className={styles['about-text-first']}>
          Мы опытная команда, для которой трейдинг – профессия. TradeBlade
          является авторизованным официальным брокером биржи Binance.{' '}
        </p>
        <p className={styles['about-text-second']}>
          Он представляет пользователям множество преимуществ, таких как более
          високая скорость синхронизации API и возможность создать учетную
          запись Binance через платформу TradeBlade всего в 1 клик.
        </p>
      </div>

      <div className={styles['try-free-wrapper']}>
        <h3>Попробуйте сейчас и получите 5 дней бесплатного пользования</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Ваш e–mail"
            className={styles['about-email-input']}
          />
          <button type="submit" className={styles['form-button']}>
            попробовать
          </button>
        </form>
      </div>
    </section>
  );
};

export default AboutCompanySection;
