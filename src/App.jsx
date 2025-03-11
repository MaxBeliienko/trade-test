import styles from './App.module.css';
import Header from './components/header/Header';
import HeroSection from './components/heroSection/HeroSection';
import NumberSection from './components/numbersSection/NumberSection';

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <HeroSection />
      <NumberSection />
    </div>
  );
}

export default App;
