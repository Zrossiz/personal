import { Layout } from '@/layout/Layout';

const GoECommercePage = () => {
  return (
    <Layout>
      <>
        <h1>Проект: Интернет-магазин</h1>

        <h2>1. Мотивация проекта</h2>
        <p>Основные цели проекта:</p>
        <ol>
          <li>Научиться проектировать базу данных (БД).</li>
          <li>Освоить работу с джойнами таблиц в БД.</li>
          <li>Научиться строить архитектуру веб-приложений.</li>
          <li>Овладеть основами тестирования (юнит и интеграционного).</li>
          <li>Разобраться с основами работы HTTP-запросов.</li>
          <li>Освоить работу с JWT (реализация access и refresh токенов).</li>
          <li>Научиться работать с Docker и Docker Compose для развертывания приложения.</li>
          <li>Освоить работу с API Telegram.</li>
          <li>Научиться разрабатывать и управлять собственным файловым сервером.</li>
        </ol>

        <h2>2. Функционал приложения</h2>

        <h3>2.1 Общий функционал</h3>
        <ul>
          <li>
            При старте приложения через <code>docker-compose</code> запускаются следующие сервисы:
            <ol>
              <li>Backend — основное приложение с бизнес-логикой.</li>
              <li>Frontend — клиентская часть.</li>
              <li>Database — реляционная база данных для хранения информации.</li>
              <li>Tg bot app — Telegram-бот для уведомлений.</li>
            </ol>
          </li>
        </ul>

        <h3>2.2 Авторизация и регистрация</h3>
        <ul>
          <li>Полноценная регистрация и авторизация пользователей с использованием JWT.</li>
          <li>
            Реализация двух типов токенов: <strong>access</strong> и <strong>refresh</strong>.
          </li>
          <li>Механизм обновления токенов и контроль их сроков действия.</li>
        </ul>

        <h3>2.3 CRUD-операции для каждой сущности</h3>
        <ul>
          <li>
            Реализация <strong>CRUD</strong> (Create, Read, Update, Delete) операций для всех
            сущностей в базе данных.
          </li>
          <li>Валидация данных на стороне сервера.</li>
          <li>Обработка ошибок и отправка информативных ответов клиенту.</li>
        </ul>

        <h3>2.4 Интеграция с Telegram ботом</h3>
        <ul>
          <li>
            После заказа через веб-интерфейс или API приложение отправляет уведомление в
            Telegram-чат.
          </li>
          <li>Telegram-бот обрабатывает запросы на основе API Telegram.</li>
          <li>
            Возможность настройки чатов и уведомлений для разных типов событий (например, заказов).
          </li>
        </ul>

        <h3>2.5 Файловый сервер</h3>
        <ul>
          <li>
            <strong>Прием и хранение изображений:</strong>
            <ul>
              <li>
                Сервер принимает изображения (например, изображения продуктов) и сохраняет их в
                статической директории.
              </li>
              <li>
                Для каждой сохраненной фотографии в базе данных должен храниться путь до файла.
              </li>
              <li>
                Названия файлов генерируются с использованием <code>uuid4</code> для уникальности.
              </li>
            </ul>
          </li>
          <li>
            <strong>Очистка неиспользуемых файлов:</strong> крон-функция ежедневно удаляет файлы,
            неиспользуемые в базе данных (например, старые изображения).
          </li>
        </ul>

        <h2>3. План работы над приложением</h2>

        <h3>3.1 Диаграмма базы данных</h3>
        <ul>
          <li>
            Создание диаграммы базы данных, включающей все сущности:
            <ul>
              <li>Категории</li>
              <li>Подкатегории</li>
              <li>Бренды</li>
              <li>Товары</li>
              <li>Отзывы</li>
              <li>Варианты товаров</li>
              <li>Цвета</li>
              <li>Корзина</li>
              <li>Пользователи</li>
              <li>Заказы</li>
            </ul>
          </li>
        </ul>

        <h3>3.2 Модели в базе данных</h3>
        <ul>
          <li>Описать модели для каждой сущности.</li>
          <li>Настроить связи между моделями (один ко многим, многие ко многим и т.д.).</li>
        </ul>

        <h3>3.3 Реализация авторизации и регистрации</h3>
        <ul>
          <li>Реализовать регистрацию с валидацией данных.</li>
          <li>Настроить авторизацию через JWT (с поддержкой обновления токенов).</li>
        </ul>

        <h3>3.4 Реализация CRUD для сущностей БД</h3>
        <ul>
          <li>
            Полный функционал CRUD для:
            <ul>
              <li>Продуктов</li>
              <li>Категорий</li>
              <li>Пользователей</li>
              <li>Заказов и других сущностей.</li>
            </ul>
          </li>
        </ul>

        <h3>3.5 Сортировка и фильтрация</h3>
        <ul>
          <li>
            Реализовать сортировку и фильтрацию продуктов по категориям, цене, наличию (ASC, DESC).
          </li>
        </ul>

        <h3>3.6 Разработка файлового сервера</h3>
        <ul>
          <li>
            Реализовать сервер для работы с файлами:
            <ul>
              <li>Прием файлов через API.</li>
              <li>Генерация уникальных имен файлов.</li>
              <li>Хранение путей к файлам в базе данных.</li>
              <li>Удаление неиспользуемых файлов с помощью крон-функции.</li>
            </ul>
          </li>
        </ul>

        <h3>3.7 Тестирование приложения</h3>
        <ul>
          <li>Написание юнит- и интеграционных тестов для всех ключевых компонентов приложения.</li>
          <li>Уровень покрытия тестами должен быть не менее 50%.</li>
          <li>Протестировать API, модели, функционал Telegram-бота и файлового сервера.</li>
        </ul>

        <h3>3.8 Деплой приложения</h3>
        <ul>
          <li>
            Настроить деплой приложения в Docker с использованием <code>docker-compose</code>.
          </li>
          <li>
            Возможность развертывания всех сервисов (Backend, Frontend, Database, Tg bot app).
          </li>
          <li>Подготовить документацию по развертыванию и настройке приложения.</li>
        </ul>

        <h2>4. Дополнительные функции</h2>

        <h3>4.1 Логирование</h3>
        <ul>
          <li>Реализовать систему логирования действий пользователя и ошибок на сервере.</li>
          <li>Логи сохраняются в файл и отображаются в консоли.</li>
        </ul>

        <h3>4.2 Документация</h3>
        <ul>
          <li>
            Подготовить подробную документацию API с использованием <strong>Swagger</strong>.
          </li>
          <li>Описать маршруты для работы с продуктами, пользователями, заказами и файлами.</li>
        </ul>

        <h3>4.3 Аутентификация и безопасность</h3>
        <ul>
          <li>Защита всех маршрутов API с использованием JWT.</li>
          <li>Ограничение доступа к маршрутам для авторизованных пользователей.</li>
          <li>Реализация двухфакторной аутентификации.</li>
          <li>Защита от DDOS-атак (ограничение количества запросов).</li>
        </ul>

        <h3>4.4 Оптимизация запросов</h3>
        <ul>
          <li>Оптимизация работы с базой данных с помощью индексов и правильных запросов.</li>
          <li>Применение джойнов для выборки связанных данных.</li>
        </ul>
      </>
    </Layout>
  );
};

export default GoECommercePage;
