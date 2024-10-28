import { Layout } from '@/layout/Layout';

const JsPasswordGenerator = () => {
  return (
    <Layout>
      <>
        <h1>Генератор паролей</h1>
        <h2>Мотивация проекта</h2>
        <ul>
          <li>Научиться работать с файловой системой ОС.</li>
          <li>Изучение редактирования и создания файлов.</li>
          <li>
            Практика парсинга <code>.txt</code> и <code>.json</code> файлов.
          </li>
          <li>Изучение работы с JWT.</li>
          <li>Научиться хешировать пароли.</li>
        </ul>
        <h2>Функционал приложения</h2>
        <h3>Работа с хранилищем</h3>
        <ul>
          <li>
            <strong>Сохранение записи</strong> в локальное хранилище.
          </li>
          <li>
            <strong>Получение записи</strong> из локального хранилища.
          </li>
          <li>
            <strong>Сохранение записи</strong> в файл.
          </li>
          <li>
            <strong>Чтение записи (-ей)</strong> из файла.
          </li>
        </ul>
        <h3>Работа с пользователем</h3>
        <ul>
          <li>
            <strong>Создание пользователя</strong>.
          </li>
          <li>
            <strong>Защита паролей</strong>.
          </li>
          <li>
            <strong>JWT авторизация</strong>.
          </li>
        </ul>
        <h2>Сервисы</h2>
        <p>
          Приложение на <strong>Js</strong>, реализующее REST API для управления паролями.
        </p>
        <h3>Эндпоинты</h3>
        <ul>
          <li>
            <p>
              <strong>POST /user/registration</strong> — регистрация нового пользователя.
            </p>
            <ul>
              <li>Регистрирует пользователя и сохраняет его данные в памяти.</li>
              <li>Выдает JWT токен.</li>
            </ul>
          </li>
          <li>
            <p>
              <strong>POST (protected) /password/new</strong> — генерация пароля.
            </p>
            <ul>
              <li>
                Получает запрос, достает <code>username</code> из JWT и генерирует пароль.
              </li>
              <li>
                Возвращает ответ в формате:
                <pre>
                  <code>
                    &#123;
                    <br />
                    <span>&quot;username&quot;</span>: <span>&quot;string&quot;</span>,
                    <span>&quot;password&quot;</span>: <br />
                    <span>&quot;string&quot;</span>,<span>&quot;created_at&quot;</span>:{' '}
                    <span>&quot;Date&quot;</span>
                    <br />
                    &#125;
                    <br />
                  </code>
                </pre>
              </li>
              <li>Пароль должен содержать последовательность из 6 символов и быть уникальным.</li>
              <li>
                После генерации пароль сохраняется в файл <code>passwords.txt</code> или{' '}
                <code>passwords.json</code>.
              </li>
              <li>
                Одна запись пароля содержит: <code>username</code>, сгенерированный пароль и дату
                создания.
              </li>
            </ul>
          </li>
          <li>
            <p>
              <strong>GET (protected) /password/&#123;username&#125;</strong> — получение всех
              паролей пользователя.
            </p>
            <ul>
              <li>
                Возвращает все сгенерированные пользователем пароли в формате массива:
                <pre>
                  <code>
                    &#123; <br />
                    <span>&quot;username&quot;</span>: <span>&quot;string&quot;</span>,
                    <span>&quot;password&quot;</span>: <br />
                    <span>&quot;string&quot;</span>,<span>&quot;created_at&quot;</span>:{' '}
                    <span>&quot;Date&quot;</span> <br />
                    &#125; <br />
                  </code>
                </pre>
              </li>
            </ul>
          </li>
          <li>
            <p>
              <strong>
                DELETE (protected) /password/&#123;username&#125;/&#123;password&#125;
              </strong>{' '}
              — удаление пароля пользователя.
            </p>
            <ul>
              <li>
                Удаляет все записи, где <code>username</code> соответствует указанному пользователю,
                а <code>password</code> — указанному паролю.
              </li>
            </ul>
          </li>
        </ul>
      </>
    </Layout>
  );
};

export default JsPasswordGenerator;
