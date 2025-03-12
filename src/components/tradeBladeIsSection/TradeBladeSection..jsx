import styles from './TradeBladeSection.module.css';
import trade1 from '../../assets/trade-sect-1.svg';
import trade2 from '../../assets/trade-sect-2.svg';
import trade3 from '../../assets/trade-sect-3.svg';
import trade4 from '../../assets/trade-sect-4.svg';
import trade5 from '../../assets/trade-sect-5.svg';

const TradeBladeSection = () => {
  return (
    <section className={styles['trade-blade-section']}>
      <h2>tradeblade это</h2>
      <ul className={styles['trade-blade-list']}>
        <li>
          <img src={trade1} alt="icon" />
          <div>
            <h3>Копи-трейдинг 24/7</h3>
            <p>
              Copy-Trading позволяет следить за сделками команды и получать
              прибыль 24/7 без каких-либо усилий или проблем для вас.
            </p>
          </div>
        </li>
        <li>
          <img src={trade2} alt="icon" />
          <div>
            <h3>Торговля спотовыми и фьючерсными сделками</h3>
            <p>
              Платформа для копи–трейдинга поддерживает торговлю как спотовыми,
              так и фьючерсными сделками на Binance.
            </p>
          </div>
        </li>
        <li>
          <img src={trade3} alt="icon" />
          <div>
            <h3>Высокая прибыль каждий день</h3>
            <p>
              Каждая сделка показывает хорошие результаты на рынках за счет
              хорошего денежного и риск менеджмента.
            </p>
          </div>
        </li>
        <li>
          <img src={trade4} alt="icon" />
          <div>
            <h3>Собственный курс по трейдингу</h3>
            <p>
              Мы хотим менять комьюнити, улучшать его. В личном кабинете на
              сайте вы найдете наш собственный курс по криптовалютам, который
              поможет увереннее понимать наши сигналы и разрабатывать свои.
            </p>
          </div>
        </li>
        <li>
          <img src={trade5} alt="icon" />
          <div>
            <h3>Сильное окружение</h3>
            <p>
              Ты попадаешь в сильное крипто окружение, ведь развиваться легче
              когда нас много. В чате присутствуют люди из нашей команды,
              которые общаються со всеми, помагают и подсказывают.
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default TradeBladeSection;
