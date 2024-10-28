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

        <h3>Таблица навыков после прохождения курса</h3>
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
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
            </tr>
            <tr>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default GoPage;
