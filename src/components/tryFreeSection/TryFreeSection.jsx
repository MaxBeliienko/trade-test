import styles from './TryFreeSection.module.css';
import { useState } from 'react';

const TryFreeSection = () => {
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
    <section className={styles['try-free-container']}>
      <h3>Начните прямо сейчас с бесплатным 5–и дневным пробным периодом!</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Ваш e–mail"
          className={styles['hero-email-input']}
        />
        <button type="submit" className={styles['form-button']}>
          зарегистрироваться
        </button>
      </form>
    </section>
  );
};

export default TryFreeSection;
