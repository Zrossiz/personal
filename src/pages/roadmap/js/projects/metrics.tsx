import { Layout } from '@/layout/Layout';

const JsMetricsPage = () => {
  return (
    <Layout>
      <>
        <h1 id="-">Техническое задание: Проект по сбору метрик</h1>
        <h2 id="1-">1. Мотивация проекта</h2>
        <ul>
          <li>Практика проектирования приложения;</li>
          <li>Практика работы с несколькими хранилищами данных;</li>
          <li>Опыт работы с реляционной БД;</li>
          <li>Практика взаимодействия с ресурсами машины;</li>
          <li>Практика работы с REST API;</li>
          <li>Опыт написания юнит- и интеграционных тестов.</li>
        </ul>
        <h2 id="2-">2. Функционал приложения</h2>
        <h3 id="2-1-">2.1 Архитектура</h3>
        <p>Проект состоит из двух основных компонентов:</p>
        <ol>
          <li>
            <strong>Агент</strong>: собирает метрики на стороне клиента.
          </li>
          <li>
            <strong>Сервер</strong>: принимает, обрабатывает и сохраняет метрики. Express.js
          </li>
        </ol>
        <h3 id="2-2-">2.2 Описание функционала агента</h3>
        <ul>
          <li>
            Агент каждые <code>n</code> секунд собирает метрики системы (например, использование
            CPU, памяти) и отправляет результаты на сервер.
          </li>
          <li>
            Агент передаёт <strong>poll count</strong>, который отражает количество итераций сбора
            метрик на клиенте.
          </li>
          <li>
            После каждого сбора метрик, <strong>poll count</strong> увеличивается на +1.
          </li>
          <li>
            При перезапуске агента, <strong>poll count</strong> сбрасывается. Однако сервер должен
            учитывать значения до перезагрузки и после, суммируя их.
          </li>
        </ul>
        <h3 id="2-3-">2.3 Описание функционала сервера</h3>
        <ul>
          <li>Сервер принимает и обрабатывает метрики, переданные агентом.</li>
          <li>
            Поддерживаются оба типа метрик:
            <ul>
              <li>
                <strong>Counter</strong>: счетчики, которые увеличиваются на фиксированное значение
                (например, poll count).
              </li>
              <li>
                <strong>Gauge</strong>: метрики, которые могут изменяться в обе стороны (например,
                использование памяти или процессора).
              </li>
            </ul>
          </li>
          <li>
            Сервер должен уметь работать с протоколом:
            <ul>
              <li>
                <strong>HTTP</strong>
              </li>
            </ul>
          </li>
        </ul>
        <h4 id="2-3-1-">2.3.1 Хранение метрик</h4>
        <p>Сервер должен поддерживать три способа хранения метрик:</p>
        <ol>
          <li>
            <strong>В памяти</strong>: метрики хранятся в массиве.
          </li>
          <li>
            <strong>В файле</strong>: метрики записываются в файл каждые <code>n</code> секунд. При
            запуске с флагом <code>-r</code>, сервер загружает метрики из файла.
          </li>
          <li>
            <strong>В базе данных</strong>: метрики записываются в реляционную БД после каждого
            запроса.
          </li>
        </ol>
        <h4 id="2-3-2-graceful-shutdown">2.3.2 Graceful shutdown</h4>
        <ul>
          <li>
            При завершении работы сервера метрики должны быть сохранены в файл для последующей
            загрузки при рестарте.
          </li>
        </ul>
        <h3 id="2-4-">2.4 Переменные окружения</h3>
        <ul>
          <li>
            Переменные окружения могут быть прочитаны как из файла <code>.env</code>, так и из
            параметров командной строки. Приоритет отдаётся переменным из окружения.
          </li>
        </ul>
        <h2 id="3-data-transfer-object-dto-">3. Data Transfer Object (DTO)</h2>
        <p>Для передачи данных используется следующая структура метрики:</p>
        <pre>
          <code>
            <span>interface </span> &#123; <br />
            <span>id number Уникальный идентификатор метрики</span> <br />
            <span>name string Название метрики</span> <br />
            <span>type string Тип метрики (counter или gauge)</span><br />
            <span>value number Значение для метрик типа gauge</span> <br />
            <span>delta number Изменение для метрик типа counter</span> <br />
            <span>createdAt Date Время создания метрики</span><br />
            &#125;
          </code>
        </pre>
        <h2 id="4-api">4. Маршруты API</h2>
        <ul>
          <li>
            <code>GET /</code> — Возвращает HTML страницу со всеми метриками последней итерации.
          </li>
          <li>
            <code>POST /api/updates</code> — Принимает batched (групповой) запрос метрик в формате
            JSON.
          </li>
          <li>
            <code>POST /api/update</code> — Принимает метрику (DTO) в теле запроса в формате JSON.
          </li>
          <li>
            <code>POST /api/&#123;type&#125;/&#123;name&#125;/&#123;value&#125;</code> — Принимает
            значение метрики через параметры URL.
          </li>
          <li>
            <code>GET /api/value/&#123;type&#125;/&#123;name&#125;</code> — Возвращает значение
            метрики по её типу и названию из URL.
          </li>
        </ul>
        <h2 id="5-">5. Безопасность: шифрование данных</h2>
        <p>
          Для обеспечения безопасности передачи данных используется метод хеширования по алгоритму{' '}
          <strong>SHA-256</strong>. Алгоритм следующий:
        </p>
        <ol>
          <li>
            Клиент добавляет в заголовок запроса хешированное значение (заголовок <code>Hash</code>
            ).
          </li>
          <li>
            Хеш генерируется следующим образом:
            <ul>
              <li>Ключ берётся из переменной окружения или флага.</li>
              <li>
                Тело запроса в формате JSON хешируется вместе с ключом с использованием алгоритма{' '}
                <strong>SHA-256</strong>.
              </li>
            </ul>
          </li>
          <li>
            Сервер при получении запроса:
            <ul>
              <li>Хеширует полученные данные с ключом.</li>
              <li>Если хеши совпадают, сервер принимает запрос.</li>
              <li>
                В случае несоответствия сервер возвращает ошибку <code>401 Unauthorized</code>.
              </li>
            </ul>
          </li>
        </ol>
        <h2 id="6-">6. Дополнительные требования</h2>
        <h3 id="6-1-">6.1 Тестирование</h3>
        <ul>
          <li>Написать юнит- и интеграционные тесты для всех ключевых компонентов проекта.</li>
          <li>Тесты должны покрывать как работу агента, так и работу сервера.</li>
        </ul>
        <h3 id="6-2-">6.2 Документация</h3>
        <ul>
          <li>
            API проекта должно быть задокументировано с использованием <strong>Swagger</strong>.
          </li>
          <li>Документация должна включать описание всех маршрутов и форматов запросов/ответов.</li>
        </ul>
        <h3 id="6-3-">6.3 Логирование</h3>
        <ul>
          <li>Сервер должен вести логирование всех запросов и ошибок.</li>
          <li>Логи должны сохраняться в файл и выводиться в консоль.</li>
        </ul>
        <h2 id="7-">7. Переменные окружения</h2>
        <table>
          <thead>
            <tr>
              <th>Параметр</th>
              <th>Тип</th>
              <th>Флаг</th>
              <th>Описание</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>server address</strong>
              </td>
              <td>string</td>
              <td>
                <code>-a</code>
              </td>
              <td>Адрес сервера</td>
            </tr>
            <tr>
              <td>
                <strong>store interval</strong>
              </td>
              <td>int</td>
              <td>
                <code>-i</code>
              </td>
              <td>Интервал для сохранения метрик (в секундах)</td>
            </tr>
            <tr>
              <td>
                <strong>restore metrics</strong>
              </td>
              <td>bool</td>
              <td>
                <code>-r</code>
              </td>
              <td>Флаг для восстановления метрик при запуске</td>
            </tr>
            <tr>
              <td>
                <strong>file storage path</strong>
              </td>
              <td>string</td>
              <td>
                <code>-f</code>
              </td>
              <td>Путь к файлу для хранения метрик</td>
            </tr>
            <tr>
              <td>
                <strong>database dsn</strong>
              </td>
              <td>string</td>
              <td>
                <code>-d</code>
              </td>
              <td>Строка подключения к базе данных (DSN)</td>
            </tr>
          </tbody>
        </table>
        <h2 id="8-">8. Настройки агента</h2>
        <table>
          <thead>
            <tr>
              <th>Параметр</th>
              <th>Тип</th>
              <th>Флаг</th>
              <th>Описание</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>server address</strong>
              </td>
              <td>string</td>
              <td>
                <code>-a</code>
              </td>
              <td>Адрес сервера, к которому подключается агент</td>
            </tr>
            <tr>
              <td>
                <strong>poll interval</strong>
              </td>
              <td>int</td>
              <td>
                <code>-p</code>
              </td>
              <td>Интервал для сбора метрик (в секундах)</td>
            </tr>
            <tr>
              <td>
                <strong>report interval</strong>
              </td>
              <td>int</td>
              <td>
                <code>-r</code>
              </td>
              <td>Интервал для отправки отчёта на сервер (в секундах)</td>
            </tr>
          </tbody>
        </table>
        <h2 id="9-">9. Метрики для сбора</h2>
        <ul>
          <li>
            <strong>PollCount</strong> (Counter)
          </li>
          <li>
            <strong>Alloc</strong> (Gauge)
          </li>
          <li>
            <strong>BuckHashSys</strong> (Gauge)
          </li>
          <li>
            <strong>Frees</strong> (Gauge)
          </li>
          <li>
            <strong>GCCPUFraction</strong> (Gauge)
          </li>
          <li>
            <strong>GCSys</strong> (Gauge)
          </li>
          <li>
            <strong>HeapAlloc</strong> (Gauge)
          </li>
          <li>
            <strong>HeapIdle</strong> (Gauge)
          </li>
          <li>
            <strong>HeapInuse</strong> (Gauge)
          </li>
          <li>
            <strong>HeapObjects</strong> (Gauge)
          </li>
          <li>
            <strong>HeapReleased</strong> (Gauge)
          </li>
          <li>
            <strong>HeapSys</strong> (Gauge)
          </li>
          <li>
            <strong>LastGC</strong> (Gauge)
          </li>
          <li>
            <strong>Lookups</strong> (Gauge)
          </li>
          <li>
            <strong>MCacheInuse</strong> (Gauge)
          </li>
          <li>
            <strong>MCacheSys</strong> (Gauge)
          </li>
          <li>
            <strong>MSpanInuse</strong> (Gauge)
          </li>
          <li>
            <strong>MSpanSys</strong> (Gauge)
          </li>
          <li>
            <strong>Mallocs</strong> (Gauge)
          </li>
          <li>
            <strong>NextGC</strong> (Gauge)
          </li>
          <li>
            <strong>NumForcedGC</strong> (Gauge)
          </li>
          <li>
            <strong>NumGC</strong> (Gauge)
          </li>
          <li>
            <strong>OtherSys</strong> (Gauge)
          </li>
          <li>
            <strong>PauseTotalNs</strong> (Gauge)
          </li>
          <li>
            <strong>StackInuse</strong> (Gauge)
          </li>
          <li>
            <strong>StackSys</strong> (Gauge)
          </li>
          <li>
            <strong>Sys</strong> (Gauge)
          </li>
          <li>
            <strong>TotalAlloc</strong> (Gauge)
          </li>
          <li>
            <strong>RandomValue</strong> (Gauge)
          </li>
          <li>
            <strong>TotalMemory</strong> (Gauge)
          </li>
          <li>
            <strong>FreeMemory</strong> (Gauge)
          </li>
        </ul>
      </>
    </Layout>
  );
};

export default JsMetricsPage;
