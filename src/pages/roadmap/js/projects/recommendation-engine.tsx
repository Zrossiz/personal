import { Layout } from '@/layout/Layout';

const JsRecommendationEngine = () => {
  return (
    <Layout>
      <>
        <h1>Проект: Рекомендательная система</h1>

        <h2>Мотивация проекта</h2>
        <ul>
          <li>Разработка системы рекомендаций на основе пользовательских предпочтений.</li>
          <li>
            Изучение работы с базой данных <strong>PostgreSQL</strong> и написание Prisma запросов.
          </li>
          <li>
            Использование <strong>Redis</strong> для кэширования и повышения производительности.
          </li>
          <li>
            Реализация многоуровневой авторизации с использованием <strong>JWT</strong>
            (Access и Refresh).
          </li>
          <li>
            Изучение архитектуры микросервисов и асинхронных процессов для повышения эффективности
            обработки данных.
          </li>
          <li>
            Практика работы с <strong>Docker</strong> и <strong>Docker Compose</strong> для
            контейнеризации приложения.
          </li>
        </ul>

        <h2>Общее описание работы приложения</h2>
        <p>
          Рекомендательная система — это веб-приложение, предназначенное для анализа
          пользовательских предпочтений и предоставления персонализированных рекомендаций. Основная
          цель проекта — предложить пользователям релевантный контент (фильмы, книги, музыку и
          т.д.), основываясь на их взаимодействиях с платформой.
        </p>

        <h3>Основные функции:</h3>
        <ol>
          <li>
            <strong>Регистрация и авторизация пользователей:</strong>
            Пользователи могут создавать учетные записи и входить в систему через механизм JWT,
            используя Access и Refresh токены для безопасной аутентификации.
          </li>
          <li>
            <strong>Работа с контентом:</strong>
            <ul>
              <li>
                Пользователи могут просматривать и оценивать контент, принадлежащий разным
                категориям (фильмы, музыка и т.д.).
              </li>
              <li>
                Система записывает историю взаимодействий, которая служит основой для рекомендаций.
              </li>
            </ul>
          </li>
          <li>
            <strong>Формирование рекомендаций:</strong>
            <ul>
              <li>
                Приложение анализирует предпочтения пользователей и формирует список рекомендаций.
              </li>
              <li>Список рекомендаций обновляется по мере поступления новых данных.</li>
            </ul>
          </li>
          <li>
            <strong>Кэширование рекомендаций:</strong>
            Использование Redis для быстрого доступа к популярным и часто запрашиваемым данным.
          </li>
          <li>
            <strong>Категории контента:</strong>
            Администраторы могут добавлять новые категории, позволяя пользователям выбирать
            предпочтения.
          </li>
        </ol>

        <h2>Для чего нужен проект</h2>
        <p>
          Проект предназначен для создания персонализированного пользовательского опыта, помогая
          пользователям находить контент, который наиболее соответствует их вкусам. Рекомендательная
          система может применяться на онлайн-платформах для фильмов, музыки, книг и других
          медиа-ресурсов.
        </p>

        <h2>Функционал приложения</h2>
        <h3>Работа с пользователями</h3>
        <ul>
          <li>
            <strong>Регистрация</strong> — создание нового пользователя.
          </li>
          <li>
            <strong>Авторизация</strong> — вход в систему с использованием Access и Refresh токенов.
          </li>
          <li>
            <strong>Выход</strong> — завершение сессии с истечением токенов.
          </li>
        </ul>

        <h3>Рекомендации</h3>
        <ul>
          <li>
            <strong>Формирование рекомендаций</strong> — на основе данных о предпочтениях
            пользователей (история просмотров, лайки, категории).
          </li>
          <li>
            <strong>Обновление рекомендаций</strong> — регулярное обновление на основе новых данных.
          </li>
          <li>
            <strong>Кэширование</strong> — использование Redis для хранения популярных рекомендаций.
          </li>
        </ul>

        <h3>Категории и контент</h3>
        <ul>
          <li>
            <strong>Создание категорий</strong> — добавление новых категорий контента (например,
            фильмы, книги, музыка).
          </li>
          <li>
            <strong>Создание контента</strong> — добавление нового контента с привязкой к
            категориям.
          </li>
          <li>
            <strong>Оценка контента</strong> — пользователи могут оценивать контент (лайки,
            рейтинги).
          </li>
          <li>
            <strong>История взаимодействий</strong> — запись действий пользователей с контентом
            (просмотры, оценки).
          </li>
        </ul>

        <h2>Сервисы</h2>
        <h3>Бэкенд</h3>
        <p>
          Приложение на <strong>JS</strong>, реализующее REST API для управления пользователями,
          рекомендациями и контентом.
        </p>

        <h3>Эндпоинты</h3>
        <ul>
          <li>
            <strong>POST /user/registration</strong> — регистрация нового пользователя и создание
            Access и Refresh токенов.
          </li>
          <li>
            <strong>POST /user/login</strong> — авторизация пользователя, возвращение Access и
            Refresh токенов.
          </li>
          <li>
            <strong>POST /user/logout</strong> — завершение сессии, истечение токенов.
          </li>
          <li>
            <strong>POST /user/token/refresh</strong> — обновление Access и Refresh токенов.
          </li>
          <li>
            <strong>GET (protected) /recommendations</strong> — получение рекомендаций для
            пользователя с кэшированием в Redis.
          </li>
          <li>
            <strong>POST (protected) /content/view</strong> — запись факта просмотра контента.
          </li>
          <li>
            <strong>POST (protected) /content/like</strong> — оценка контента.
          </li>
          <li>
            <strong>POST (protected) /category/new</strong> — добавление новой категории (доступно
            только администратору).
          </li>
          <li>
            <strong>POST (protected) /content/new</strong> — добавление нового контента в категорию
            (доступно только администратору).
          </li>
        </ul>

        <h2>Работа с БД</h2>
        <ul>
          <li>
            <strong>PostgreSQL</strong> для хранения данных о пользователях, контенте и
            взаимодействиях.
          </li>
          <li>
            <strong>Redis</strong> для кэширования популярных данных (например, рекомендаций).
          </li>
          <li>
            Написание Prisma запросов
          </li>
        </ul>

        <h2>JWT</h2>
        <ul>
          <li>
            Используются два вида токенов:
            <ul>
              <li>
                <strong>Access token</strong> — срок действия 10-15 минут, для краткосрочной
                аутентификации.
              </li>
              <li>
                <strong>Refresh token</strong> — срок действия до 2 месяцев, используется для
                обновления Access токена.
              </li>
              <li>
                <strong>Привязка Refresh token</strong> к пользователю — хранится в PostgreSQL.
              </li>
            </ul>
          </li>
          <li>
            <strong>Обновление токенов</strong> — пользователь может запросить новый Access токен,
            используя действующий Refresh токен.
          </li>
        </ul>

        <h2>Когда кэшировать</h2>
        <ul>
          <li>
            <strong>Первичный запрос:</strong> если данных нет в кэше, выполняется запрос к базе
            данных, результат сохраняется в Redis с TTL.
          </li>
          <li>
            <strong>Обновление кэша:</strong> кэш обновляется при каждом взаимодействии пользователя
            с контентом.
          </li>
          <li>
            <strong>Принудительное обновление:</strong> при значительных изменениях в данных
            (например, добавление нового контента) можно сбросить кэш для актуализации.
          </li>
        </ul>

        <h2>Docker</h2>
        <p>
          Проект состоит из нескольких сервисов, каждый из которых размещается в отдельном
          Docker-контейнере. Используется <strong>Docker Compose</strong> для управления и
          оркестрации этих контейнеров.
        </p>

        <h2>План работы над проектом</h2>
        <ol>
          <li>
            <strong>Настройка БД</strong> — интеграция PostgreSQL и Redis с приложением на JS.
          </li>
          <li>
            <strong>Работа с пользователями</strong> — регистрация, авторизация, реализация JWT.
          </li>
          <li>
            <strong>Создание контента</strong> — добавление категорий и контента, привязка к
            категориям.
          </li>
          <li>
            <strong>История взаимодействий</strong> — запись действий пользователя (просмотры,
            оценки).
          </li>
          <li>
            <strong>Формирование рекомендаций</strong> — разработка SQL-запросов для рекомендаций на
            основе истории.
          </li>
          <li>
            <strong>Кэширование</strong> — настройка Redis для ускорения популярных запросов.
          </li>
          <li>
            <strong>Обновление данных</strong> — обеспечение актуальности рекомендаций через
            обновление кэша.
          </li>
          <li>
            <strong>Деплой</strong> — развёртывание проекта с помощью Docker Compose на сервере.
          </li>
        </ol>

        <h2>Деплой</h2>
        <p>
          Развёртывание проекта осуществляется на VPS с использованием{' '}
          <strong>Docker Compose</strong>, что обеспечивает лёгкое масштабирование и управление
          сервисами.
        </p>
      </>
    </Layout>
  );
};

export default JsRecommendationEngine;
