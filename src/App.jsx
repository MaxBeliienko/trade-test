import styles from './App.module.css';
import Header from './components/header/Header';
import HeroSection from './components/heroSection/HeroSection';
import NumberSection from './components/numbersSection/NumberSection';
import CompletedDealsSection from './components/completedDealsSection/CompletedDealsSection';
import AboutCompanySection from './components/aboutCompanySection/AboutCompanySection';
import TradeBladeSection from './components/tradeBladeIsSection/TradeBladeSection.';
import HowUseServiceSection from './components/howUseServiceSection/HowUseServiceSection';
import PricesSection from './components/pricesSection/PricesSection';
import ReviewsSection from './components/reviewsSection/ReviewsSection';
import FaqSection from './components/faqSection/FaqSection';
import TryFreeSection from './components/tryFreeSection/TryFreeSection';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <HeroSection />
      <NumberSection />
      <CompletedDealsSection />
      <AboutCompanySection />
      <TradeBladeSection />
      <HowUseServiceSection />
      <PricesSection />
      <ReviewsSection />
      <FaqSection />
      <TryFreeSection />
      <Footer />
    </div>
  );
}

export default App;
