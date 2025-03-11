import styles from './CompletedDealsSection.module.css';
import data from '../../mock/deals-data.json';
import Carousel from './carousel/Carousel';

const CompletedDealsSection = () => {
  console.log(data);
  return (
    <section className={styles['deals-section-container']} id="deals">
      <h2>Прошедшие сделки</h2>
      <p>
        <span className={styles['online-span']}></span>
        Онлайн
      </p>
      <Carousel data={data} />
    </section>
  );
};

export default CompletedDealsSection;
