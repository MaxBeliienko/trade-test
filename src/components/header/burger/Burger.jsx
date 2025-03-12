import styles from './Burger.module.css';
import closeBtn from '../../../assets/close-btn.png';
import { scrollToSection } from '../../../utils/scrollToSection';

const Burger = ({ closeBurger }) => {
  const handleScroll = id => {
    scrollToSection(id);
    closeBurger();
  };

  return (
    <>
      <button className={styles['close-btn']} onClick={closeBurger}>
        <img
          src={closeBtn}
          alt="close-burger-menu-button"
          className={styles['close-icon']}
        />
      </button>

      <nav className={styles['burger-navigation']}>
        <ul>
          <li onClick={() => handleScroll('numbers')}>Цифры</li>
          <li onClick={() => handleScroll('deals')}>Сделки онлайн</li>
          <li onClick={() => handleScroll('company')}>О компании</li>
          <li onClick={() => handleScroll('how-to-start')}>Как начать</li>
          <li onClick={() => handleScroll('tariffs')}>Тарифы</li>
          <li onClick={() => handleScroll('reviews')}>Отзывы</li>
          <li onClick={() => handleScroll('faq')}>FAQ</li>
        </ul>
      </nav>
      <div className={styles['burger-button-wrapper']}>
        <button className={styles['registr-btn']}>регистрация</button>
        <button className={styles['login-btn']}>Войти</button>
      </div>
    </>
  );
};

export default Burger;
