import styles from './Footer.module.css';
import { scrollToSection } from '../../utils/scrollToSection';
import logo from '../../assets/logo.png';

const Footer = () => {
  const handleNavigation = event => {
    const target = event.target;
    if (target.tagName === 'LI') {
      const sectionId = target.dataset.section;
      if (sectionId) {
        scrollToSection(sectionId);
      }
    }
  };
  return (
    <footer className={styles['footer-container']}>
      <div className={styles['footer-nav-wrapper']}>
        <p>Быстрая навигация</p>
        <nav onClick={handleNavigation}>
          <ul className={styles['footer-nav-list']}>
            <li data-section="numbers">Цифры</li>
            <li data-section="deals">Сделки онлайн</li>
            <li data-section="company">О компании</li>
            <li data-section="how-to-start">Как начать</li>
            <li data-section="tariffs">Тарифы</li>
            <li data-section="reviews">Отзывы</li>
            <li data-section="faq">FAQ</li>
          </ul>
        </nav>
      </div>
      <div className={styles['footer-logo-wrapper']}>
        <button
          onClick={() => scrollToSection('hero')}
          className={styles['logo-button']}
        >
          <img src={logo} alt="logo-home-button" />
        </button>
        <p>© 2022 TradeBlade. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
