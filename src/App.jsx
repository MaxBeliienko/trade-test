import styles from './App.module.css';
import Header from './components/header/Header';
import HeroSection from './components/heroSection/HeroSection';

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <HeroSection />
    </div>
  );
}

export default App;
