import styles from './HowUseServiceSection.module.css';

const HowUseServiceSection = () => {
  return (
    <section className={styles['how-to-use-section']} id="how-to-start">
      <h2>Как начать пользоваться сервисом</h2>
      <ul className={styles['how-to-use-list']}>
        <li>
          <h3>Создайте аккаунт</h3>
          <p>
            Начните бесплатную 3-дневную пробную версию. Кредитная карта не
            требуется.
          </p>
        </li>
        <li>
          <h3>Подключить обмен API ключами</h3>
          <p>Просто вставьте свои ключи API из личного кабинета.</p>
        </li>
        <li>
          <h3>Настройте аккаунт</h3>
          <p>
            Поставьте нужные настройки депозита на каждый сигнал и нажмите
            сохранить.
          </p>
        </li>
        <li>
          <h3>Ваш копитрейдер запущен</h3>
          <p>
            Просто расслабьтесь и начните получать пассивный доход от
            криптовалюты с помощью TradeBlade
          </p>
        </li>
      </ul>
      <button>Попробовать бесплатно</button>
    </section>
  );
};

export default HowUseServiceSection;
