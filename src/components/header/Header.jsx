import styles from './Header.module.css';
import { useState } from 'react';
import logo from '../../assets/logo.png';
import burgerIcon from '../../assets/burger-icon.png';
import Burger from './burger/Burger';
import { scrollToSection } from '../../utils/scrollToSection';

const Header = () => {
  const [showBurger, setShowBurger] = useState(false);
  const handleShowBurger = () => {
    setShowBurger(!showBurger);
  };

  return (
    <header className={styles['header-container']}>
      <img src={logo} alt="logo" className={styles.logo} />
      <nav className={styles['desktop-header-navigation']}>
        <ul>
          <li onClick={() => scrollToSection('numbers')}>Цифры</li>
          <li onClick={() => scrollToSection('deals')}>Сделки онлайн</li>
          <li onClick={() => scrollToSection('company')}>О компании</li>
          <li onClick={() => scrollToSection('how-to-start')}>Как начать</li>
          <li onClick={() => scrollToSection('tariffs')}>Тарифы</li>
          <li onClick={() => scrollToSection('reviews')}>Отзывы</li>
          <li onClick={() => scrollToSection('faq')}>FAQ</li>
        </ul>
      </nav>
      <div className={styles['desktop-log-button-wrapper']}>
        <button className={styles['login-btn']}>Вход</button>
        <button className={styles['registr-btn']}>Регистрация</button>
      </div>
      <button onClick={handleShowBurger} className={styles['burger-button']}>
        <img src={burgerIcon} alt="burger-icon" />
      </button>
      {showBurger && <Burger closeBurger={handleShowBurger} />}
    </header>
  );
};

export default Header;
