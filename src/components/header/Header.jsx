import styles from './Header.module.css';
import { useState, useRef, useEffect } from 'react';
import logo from '../../assets/logo.png';
import burgerIcon from '../../assets/burger-icon.png';
import Burger from './burger/Burger';
import { scrollToSection } from '../../utils/scrollToSection';

const Header = () => {
  const [showBurger, setShowBurger] = useState(false);
  const burgerRef = useRef(null);
  const handleShowBurger = () => {
    setShowBurger(!showBurger);
  };

  useEffect(() => {
    if (burgerRef.current) {
      if (showBurger) {
        burgerRef.current.style.transform = 'scale(1)';
        burgerRef.current.style.opacity = '1';
      } else {
        burgerRef.current.style.transform = 'scale(0.5)';
        burgerRef.current.style.opacity = '0';
      }
    }
  }, [showBurger]);

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
      <div
        ref={burgerRef}
        className={`${styles['display-none']} ${styles['burger-wrapper']} ${
          showBurger ? styles['burger-open'] : ''
        }`}
      >
        {showBurger && <Burger closeBurger={handleShowBurger} />}
      </div>
    </header>
  );
};

export default Header;
