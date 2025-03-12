import { useState } from 'react';
import styles from './FaqSection.module.css';
import faqData from '../../mock/faq-data.json';
import faqArrow from '../../assets/faq-arrow.svg';

const FaqSection = () => {
  const [openQuestions, setOpenQuestions] = useState({});

  const toggleQuestion = index => {
    setOpenQuestions({
      ...openQuestions,
      [index]: !openQuestions[index],
    });
  };

  return (
    <section className={styles['faq-section']} id="faq">
      <h2>Часто задаваемые вопросы</h2>
      <ul className={styles['faq-list']}>
        {faqData.map((question, index) => (
          <li
            key={index}
            className={`${styles.question} ${
              openQuestions[index] ? styles.open : ''
            }`}
            onClick={() => toggleQuestion(index)}
          >
            <div className={styles['question-header']}>
              <h3>{question.question}</h3>
              <img src={faqArrow} alt="arrow" className={styles.arrow} />
            </div>
            <div className={styles.answer}>{question.answer}</div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FaqSection;
