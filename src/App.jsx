import styles from './App.module.css';
import Header from './components/header/Header';
import HeroSection from './components/heroSection/HeroSection';
import NumberSection from './components/numbersSection/NumberSection';
import CompletedDealsSection from './components/completedDealsSection/CompletedDealsSection';
import AboutCompanySection from './components/aboutCompanySection/AboutCompanySection';
import PricesSection from './components/pricesSection/PricesSection';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <HeroSection />
      <NumberSection />
      <CompletedDealsSection />
      <AboutCompanySection />
      <PricesSection />
      <Footer />
    </div>
  );
}

export default App;
