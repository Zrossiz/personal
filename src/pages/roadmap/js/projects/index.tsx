import { Layout } from '@/layout/Layout';
import Link from 'next/link';
import styles from '../../../../styles/Projects.module.scss';

const JsProjectsPage = () => {
  return (
    <Layout>
      <>
        <h1>Проекты</h1>

        <div className={styles.content}>
          <p>
            Проекты разделены на три уровня (по объему работы) <br />
            Советую выполнять проекты в указанном порядке
          </p>

          <div>
            <h2>Маленькие</h2>

            <ul>
              <li>
                <Link href="/roadmap/js/projects/hangman">Виселица</Link>
              </li>
              <li>
                <Link href="/roadmap/js/projects/web-server">Веб сервер</Link>
              </li>
              <li>
                <Link href="/roadmap/js/projects/password-generator">Генератор паролей</Link>
              </li>
            </ul>
          </div>

          <div>
            <h2>Средние</h2>

            <ul>
              <li>
                <Link href="/roadmap/js/projects/todo">Планировщик задач</Link>
              </li>
              <li>
                <Link href="/roadmap/js/projects/metrics">Метрики</Link>
              </li>
              <li>
                <Link href="/roadmap/js/projects/cloud-storage">Облачное хранилище</Link>
              </li>
              <li>
                <Link href="/roadmap/js/projects/recommendation-engine">
                  Движок для рекоммендаций
                </Link>
              </li>
              <li>
                <Link href="/roadmap/js/projects/image-processing">Обработчик изображений</Link>
              </li>
            </ul>
          </div>

          <div>
            <h2>Большие</h2>

            <ul>
              <li>
                <Link href="/roadmap/js/projects/e-commerce">Интернет магазин</Link>
              </li>
              <li>
                <Link href="/roadmap/js/projects/booking-system">Система бронирования</Link>
              </li>
            </ul>
          </div>
        </div>
      </>
    </Layout>
  );
};

export default JsProjectsPage;
