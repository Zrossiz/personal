import { Layout } from '@/layout/Layout';
import styles from '../../../../styles/Questions.module.scss';

const GoQuestionsPage = () => {
  return (
    <Layout>
      <>
        <h1>Вопросы для подготовки к собеседованию</h1>
        <div className={styles.block}>
          <h2>Транзакции</h2>
          <ul>
            <li>Что такое транзакции?</li>
            <li>Какие существуют уровни изоляции транзакций?</li>
          </ul>
        </div>

        <div className={styles.block}>
          <h2>Индексы</h2>
          <ul>
            <li>Что такое индексы?</li>
          </ul>
        </div>

        <div className={styles.block}>
          <h2>Kafka</h2>
          <ul>
            <li>
              Что такое Kafka producer, consumer, topic, partition, consumer group, commit, offset?
            </li>
          </ul>
        </div>

        <div className={styles.block}>
          <h2>HTTP</h2>
          <ul>
            <li>Что такое HTTP?</li>
            <li>Чем HTTP отличается от HTTPS?</li>
            <li>Чем HTTP отличается от HTTP/2?</li>
          </ul>
        </div>

        <div className={styles.block}>
          <h2>TCP</h2>
          <ul>
            <li>Что такое TCP?</li>
            <li>Как работает установление соединения в TCP?</li>
            <li>В чем заключается надежность TCP?</li>
            <li>Как TCP обеспечивает порядок доставки данных?</li>
            <li>Почему TCP использует больше ресурсов по сравнению с UDP?</li>
          </ul>
        </div>

        <div className={styles.block}>
          <h2>UDP</h2>
          <ul>
            <li>Что такое UDP?</li>
            <li>Чем отличается TCP от UDP?</li>
          </ul>
        </div>

        <div className={styles.block}>
          <h2>Параллелизм и многопоточность</h2>
          <ul>
            <li>Что такое race condition?</li>
            <li>Что такое deadlock?</li>
            <li>Что такое mutex?</li>
            <li>Как работает RWMutex?</li>
            <li>Что такое sync.Map и зачем она нужна?</li>
          </ul>
        </div>

        <div className={styles.block}>
          <h2>Go</h2>
          <ul>
            <li>Что такое интерфейсы в Go?</li>
            <li>Что такое type assertion?</li>
            <li>Что такое горутины?</li>
            <li>Как работают каналы в Go?</li>
            <li>Что произойдет, если записать данные в закрытый канал?</li>
            <li>Почему горутины легковесные?</li>
            <li>Как соотносятся горутины и системные потоки?</li>
          </ul>
        </div>

        <div className={styles.block}>
          <h2>Операционные системы</h2>
          <ul>
            <li>Что такое контекст switch?</li>
            <li>Что такое стек?</li>
            <li>Что такое куча?</li>
            <li>Что такое вытесняющие и кооперативные задачи?</li>
          </ul>
        </div>

        <div className={styles.block}>
          <h2>Структуры данных</h2>
          <ul>
            <li>Что такое map?</li>
            <li>Какие типы данных могут быть ключами в map?</li>
            <li>Как работает обход элементов в map?</li>
            <li>Как устроены бакеты в map?</li>
            <li>Как происходит хеширование в map?</li>
            <li>Как решаются коллизии в map?</li>
          </ul>
        </div>

        <div className={styles.block}>
          <h2>Slice</h2>
          <ul>
            <li>Что такое slice?</li>
            <li>Как устроен slice?</li>
            <li>Как работает append?</li>
            <li>Как append увеличивает размер slice?</li>
            <li>Как передается slice в функцию?</li>
          </ul>
        </div>

        <div className={styles.block}>
          <h2>Контексты в Go</h2>
          <ul>
            <li>Как устроены контексты в Go?</li>
          </ul>
        </div>

        <div className={styles.block}>
          <h2>JWT</h2>
          <ul>
            <li>Что такое JWT?</li>
            <li>Из чего состоит JWT?</li>
          </ul>
        </div>

        <div className={styles.block}>
          <h2>SOLID</h2>
          <ul>
            <li>Что такое принципы SOLID?</li>
            <li>Что такое принцип единственной ответственности (S)?</li>
            <li>Что такое принцип открытости/закрытости (O)?</li>
            <li>Что такое принцип подстановки Барбары Лисков (L)?</li>
            <li>Что такое принцип разделения интерфейсов (I)?</li>
            <li>Что такое принцип инверсии зависимостей (D)?</li>
          </ul>
        </div>

        <div className={styles.block}>
          <h2>Объектно-ориентированное программирование</h2>
          <ul>
            <li>Что такое наследование?</li>
            <li>Что такое инкапсуляция?</li>
            <li>Что такое полиморфизм?</li>
          </ul>
        </div>

        <div className={styles.block}>
          <h2>Тестирование</h2>
          <ul>
            <li>Какие существуют виды тестирования кода?</li>
          </ul>
        </div>
      </>
    </Layout>
  );
};

export default GoQuestionsPage;
