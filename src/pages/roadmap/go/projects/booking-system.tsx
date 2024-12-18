import { Layout } from '@/layout/Layout';

const GoBookingSystemPage = () => {
  return (
    <Layout>
      <>
        <h1>Проект: Система бронирования с чатом</h1>

        <h2>Мотивация проекта</h2>
        <ul>
          <li>Разработка микросервисного приложения для управления бронированием отелей.</li>
          <li>
            Использование <strong>Go</strong> для создания надежного и высокопроизводительного
            сервиса.
          </li>
          <li>
            Интеграция с <strong>Kafka</strong> для асинхронной обработки задач бронирования и
            уведомлений.
          </li>
          <li>Безопасная аутентификация и авторизация с помощью JWT токенов.</li>
          <li>
            Использование <strong>PostgreSQL</strong> для хранения данных о бронированиях и
            пользователях.
          </li>
          <li>
            Кэширование с помощью <strong>Redis</strong> для повышения производительности.
          </li>
          <li>
            Контейнеризация с помощью <strong>Docker</strong> и <strong>Docker Compose</strong> для
            удобного деплоя и масштабирования.
          </li>
          <li>
            Добавление <strong>чата на Socket.IO</strong> для общения пользователей с администрацией
            в режиме реального времени.
          </li>
        </ul>

        <h2>Общее описание</h2>
        <p>
          Система бронирования — это веб-приложение, которое позволяет пользователям бронировать
          различные ресурсы (например, номера в отелях, автомобили или билеты на мероприятия).
          Основная задача проекта — обеспечить быструю и надежную обработку запросов на бронирование
          с возможностью масштабирования, а также предоставить пользователям возможность общения в
          чате для оперативной поддержки.
        </p>

        <h3>Основные функции:</h3>
        <ol>
          <li>
            <strong>Регистрация и авторизация пользователей</strong>
            <ul>
              <li>
                Пользователи могут создавать учетные записи и входить в систему через JWT токены.
              </li>
            </ul>
          </li>
          <li>
            <strong>Управление бронированиями</strong>
            <ul>
              <li>Пользователи могут бронировать доступные отели.</li>
              <li>Проверка доступности ресурсов перед бронированием.</li>
              <li>Возможность отмены бронирования.</li>
            </ul>
          </li>
          <li>
            <strong>Уведомления</strong>
            <ul>
              <li>
                Асинхронная система уведомлений через Kafka для отправки сообщений о подтверждении
                бронирования или изменении его статуса.
              </li>
              <li>Поддержка уведомлений через Telegram.</li>
            </ul>
          </li>
          <li>
            <strong>Кэширование</strong>
            <ul>
              <li>
                Кэширование Redis для часто запрашиваемых данных, таких как список доступных
                ресурсов.
              </li>
            </ul>
          </li>
          <li>
            <strong>Чат для связи с администрацией</strong>
            <ul>
              <li>
                Реализация чата через Socket.IO для общения пользователей с администрацией сервиса.
              </li>
              <li>
                Возможность отправки текстовых сообщений и оперативных ответов службы поддержки.
              </li>
            </ul>
          </li>
        </ol>

        <h2>Цели проекта</h2>
        <ul>
          <li>
            Обеспечить возможность бронирования в режиме реального времени с высокой надежностью и
            производительностью.
          </li>
          <li>Поддерживать масштабируемость системы через асинхронные процессы Kafka.</li>
          <li>
            Оптимизировать время ответа за счет кэширования и эффективного использования базы
            данных.
          </li>
          <li>
            Предоставить пользователям возможность быстрой связи с администрацией для повышения
            качества обслуживания.
          </li>
        </ul>

        <h2>Функционал приложения</h2>
        <h3>Работа с пользователями</h3>
        <ul>
          <li>
            <strong>Регистрация</strong> - создание нового пользователя через REST API.
          </li>
          <li>
            <strong>Авторизация</strong> - вход в систему с использованием JWT токенов.
          </li>
          <li>
            <strong>Обновление токенов</strong> - возможность обновить Access токен с помощью
            Refresh токена.
          </li>
        </ul>

        <h3>Управление бронированиями</h3>
        <ul>
          <li>
            <strong>Создание бронирования</strong> - пользователи могут бронировать доступные
            ресурсы.
          </li>
          <li>
            <strong>Отмена бронирования</strong> - возможность отменить бронирование при
            необходимости.
          </li>
          <li>
            <strong>Просмотр списка бронирований</strong> - пользователи могут просматривать свои
            текущие и прошлые бронирования.
          </li>
        </ul>

        <h3>Кэширование</h3>
        <ul>
          <li>
            <strong>Кэширование доступных ресурсов</strong> - уменьшение нагрузки на базу данных с
            помощью Redis.
          </li>
          <li>
            <strong>Кэширование списка бронирований</strong> - ускорение запросов к API.
          </li>
        </ul>

        <h3>Уведомления</h3>
        <ul>
          <li>
            <strong>Подтверждение бронирования</strong> - после успешного бронирования отправляется
            уведомление пользователю.
          </li>
          <li>
            <strong>Обновление статуса</strong> - при изменении статуса бронирования пользователь
            получает уведомление.
          </li>
        </ul>

        <h3>Чат</h3>
        <ul>
          <li>
            <strong>Реализация чата через Socket.IO</strong> - возможность общения пользователей с
            администрацией.
          </li>
          <li>
            <strong>Текстовые сообщения в реальном времени</strong> - пользователи могут задавать
            вопросы или уточнять детали по бронированиям.
          </li>
          <li>
            <strong>Панель администратора</strong> - администраторы могут получать и отвечать на
            сообщения пользователей.
          </li>
        </ul>

        <h2>API Сервис</h2>
        <ul>
          <li>
            <strong>POST /user/register</strong> - регистрация нового пользователя.
          </li>
          <li>
            <strong>POST /user/login</strong> - авторизация пользователя и получение JWT токенов.
          </li>
          <li>
            <strong>POST /hotel</strong> - создание нового отеля.
          </li>
          <li>
            <strong>POST /hotel/room</strong> - создание нового номера.
          </li>
          <li>
            <strong>POST /booking/new</strong> - создание нового бронирования.
          </li>
          <li>
            <strong>POST /booking/cancel/&#123;id&#125;</strong> - отмена существующего
            бронирования.
          </li>
          <li>
            <strong>GET /booking/status/&#123;id&#125;</strong> - получение статуса конкретного
            бронирования.
          </li>
          <li>
            <strong>GET /booking/list</strong> - получение списка всех бронирований пользователя.
          </li>
          <li>
            <strong>GET /chat/connect</strong> - подключение пользователя к чату через Socket.IO.
          </li>
        </ul>

        <h2>Kafka</h2>
        <ul>
          <li>
            <strong>Тема для уведомлений</strong> - Kafka обрабатывает уведомления о статусе
            бронирования.
          </li>
          <li>
            <strong>Консумеры</strong> - воркеры прослушивают Kafka и отправляют уведомления
            (например, email).
          </li>
        </ul>

        <h2>Сервисы</h2>
        <h3>Основной сервис (Go)</h3>
        <ul>
          <li>Реализация REST API для управления пользователями и бронированиями.</li>
          <li>Интеграция с Kafka для обработки уведомлений.</li>
          <li>Работа с PostgreSQL для хранения данных.</li>
          <li>Кэширование данных в Redis.</li>
          <li>Подключение к Socket.IO для чата между пользователями и администрацией.</li>
        </ul>

        <h3>Kafka</h3>
        <ul>
          <li>
            <strong>Продюсеры</strong> - отправка уведомлений в очередь Kafka.
          </li>
          <li>
            <strong>Консумеры</strong> - обработка уведомлений через воркеры.
          </li>
        </ul>

        <h3>Чат (Socket.IO)</h3>
        <ul>
          <li>Поддержка подключения и общения через WebSocket.</li>
          <li>Поддержка истории чата для обеспечения контекста.</li>
        </ul>

        <h2>Хранилище данных</h2>
        <ul>
          <li>
            <strong>PostgreSQL</strong> - основное хранилище для информации о пользователях,
            бронированиях и ресурсах.
          </li>
          <li>
            <strong>Redis</strong> - кэширование для повышения производительности.
          </li>
        </ul>

        <h2>Компоненты системы</h2>
        <ul>
          <li>
            <strong>API-сервис (Go)</strong> - взаимодействие с пользователями и управление
            бронированиями.
          </li>
          <li>
            <strong>Kafka</strong> - асинхронные задачи (уведомления).
          </li>
          <li>
            <strong>Воркеры (Go)</strong> - обработка уведомлений.
          </li>
          <li>
            <strong>PostgreSQL</strong> - база данных для хранения информации.
          </li>
          <li>
            <strong>Redis</strong> - кэширование для повышения производительности.
          </li>
          <li>
            <strong>Socket.IO-сервис</strong> - сообщения чата между пользователями и
            администрацией.
          </li>
        </ul>

        <h2>Docker и контейнеризация</h2>
        <ul>
          <li>
            <strong>Docker</strong> - для контейнеризации сервисов.
          </li>
          <li>
            <strong>Docker Compose</strong> - оркестрация всех сервисов (API, Kafka, воркеры, Redis,
            PostgreSQL, Socket.IO).
          </li>
        </ul>

        <h2>План работы</h2>
        <ol>
          <li>
            <strong>Настройка Kafka</strong> - интеграция Kafka с Go для отправки и получения
            сообщений.
          </li>
          <li>
            <strong>Реализация API</strong> - создание эндпоинтов для регистрации, авторизации и
            управления бронированиями.
          </li>
          <li>
            <strong>Обработка бронирований</strong> - разработка логики создания и отмены
            бронирований.
          </li>
          <li>
            <strong>Кэширование</strong> - настройка Redis для кэширования.
          </li>
          <li>
            <strong>Чат</strong> - настройка Socket.IO для чата.
          </li>
          <li>
            <strong>Уведомления</strong> - настройка асинхронных уведомлений через Kafka.
          </li>
          <li>
            <strong>Тестирование</strong> - тестирование производительности и устойчивости системы.
          </li>
          <li>
            <strong>Деплой</strong> - развертывание системы с помощью Docker и Docker Compose.
          </li>
        </ol>
      </>
    </Layout>
  );
};

export default GoBookingSystemPage;
