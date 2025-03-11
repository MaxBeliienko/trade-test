import styles from './NumberSection.module.css';

const NumberSection = () => {
  return (
    <section className={styles['number-section-container']} id="numbers">
      <div className={styles['number-info-wrapper']}>
        <h2>Цифры</h2>
        <p>Cентябрь 2022</p>
      </div>
      <ul className={styles['number-section-list']}>
        <li>
          <h3>
            Торговой <br /> прибыли
          </h3>
          <p>2756%</p>
        </li>
        <li>
          <h3>
            фьючерсных <br /> и спотовых сделок
          </h3>
          <p>67</p>
        </li>
        <li>
          <h3>
            прибыль <br /> подписчиков
          </h3>
          <p>375000</p>
        </li>
      </ul>
    </section>
  );
};

export default NumberSection;
