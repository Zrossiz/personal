import { Layout } from '@/layout/Layout';

const AboutPage = () => {
  return (
    <Layout>
      <>
        <h1>Штепа Егор Олегович</h1>

        <div>
          <p>
            <strong>GitHub:</strong>{' '}
            <a href="https://github.com/Zrossiz" target="_blank">
              github.com/Zrossiz
            </a>
          </p>
        </div>

        <h2>Обо мне</h2>
        <p>
          Привет! Меня зовут Егор, я backend-разработчик с опытом коммерческой разработки больше 3
          лет. <br /> За это время я разработал более 5 коммерческих проектов, включая
          веб-приложения на JavaScript и Golang. В настоящий момент я активно изучаю Golang и открыт
          к предложениям по Go разработке. Помимо работы с базами данных (MySQL, PostgreSQL,
          MongoDB), я обладаю опытом работы с системами управления версиями (Git) и облачными
          технологиями (S3).
        </p>

        <h2>Опыт работы</h2>

        <h3>Avanpost (август 2024 — настоящее время)</h3>
        <p>
          <strong>Go developer</strong>
        </p>
        <ul>
          <li>Разработка и поддержка интеграции с Excel API</li>
          <li>Разработка и поддержка SSO сервиса</li>
        </ul>

        <h3>Айтиспортс (ноябрь 2023 — август 2024)</h3>
        <p>
          <strong>Node.js backend developer</strong>
        </p>
        <ul>
          <li>Разработка системы мониторинга работы менеджеров с использованием Socket.io</li>
          <li>Разработка CRM-системы для обработки данных из Excel-файлов</li>
          <li>Создание бота для отслеживания задач в Trello и их интеграции в Telegram-чат</li>
          <li>Руководство командой node.js (онбординг стажеров)</li>
        </ul>

        <h3>Национальный технологический университет (февраль 2022 — ноябрь 2023)</h3>
        <p>
          <strong>Веб разработчик</strong>
        </p>
        <ul>
          <li>Разработка CRM-системы для внутреннего использования компании</li>
          <li>Документация проекта с использованием Swagger</li>
        </ul>

        <h2>Навыки</h2>
        <ul>
          <li>Golang</li>
          <li>TypeScript</li>
          <li>JavaScript</li>
          <li>PostgreSQL</li>
          <li>Docker-compose</li>
          <li>REST API</li>
          <li>Swagger</li>
          <li>Linux</li>
          <li>Redis</li>
          <li>gRPC</li>
          <li>Node.js</li>
        </ul>
      </>
    </Layout>
  );
};

export default AboutPage;
