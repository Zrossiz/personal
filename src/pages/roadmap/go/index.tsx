import { Layout } from '@/layout/Layout';
import Link from 'next/link';

const GoPage = () => {
  return (
    <Layout>
      <div>
        <h1>Go lang roadmap</h1>

        <ul>
          <li>
            <Link href="/roadmap/go/projects">Проекты</Link>
          </li>
          <li>
            <Link href="/roadmap/go/links">Ссылки</Link>
          </li>
          <li>
            <Link href="/roadmap/go/questions">Вопросы для подготовки</Link>
          </li>
        </ul>

        <h2>О родмапе</h2>

        <h3>Данный родмап поможет вам:</h3>
        <ol>
          <li>Мыслить как разработчик</li>
          <li>Приобрести технические знания</li>
          <li>Создать портфолио с сильными проектами</li>
        </ol>

        <h3>Таблица навыков после прохождения родмапа</h3>
        <table>
          <thead>
            <tr>
              <th>Go</th>
              <th>Backend</th>
              <th>Deploy</th>
              <th>DevOPS</th>
              <th>DB</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Синтаксис языка</td>
              <td>REST API</td>
              <td>Docker</td>
              <td>Kafka</td>
              <td>PostgreSQL</td>
            </tr>
            <tr>
              <td>Асинхронное программирование</td>
              <td>gRPC</td>
              <td>Docker-compose</td>
              <td>Linux</td>
              <td>Redis</td>
            </tr>
            <tr>
              <td>Работа с файловой системой</td>
              <td>Web sockets</td>
              <td>Nginx</td>
              <td>Demons</td>
              <td>S3</td>
            </tr>
            <tr>
              <td>Onion architecture</td>
              <td>-</td>
              <td>-</td>
              <td>Проектирование приложений</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default GoPage;
