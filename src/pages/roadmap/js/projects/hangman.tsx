import { Layout } from '@/layout/Layout';

const JsHangmanPage = () => {
  return (
    <Layout>
      <>
        <h1>Виселица</h1>
        <h2>Мотивация проекта</h2>
        <p>
          Проект является разминочным, и его основная цель — проверить себя на то, что от теории и
          решения задач уже можно переходить к реализации цельных проектов. Если приложения
          подобного уровня вы уже реализовывали без возникновения трудностей, проект можно
          пропустить.
        </p>
        <h2>Функционал приложения и меню консольного интерфейса</h2>
        <ul>
          <li>При старте приложение предлагает начать новую игру или выйти из приложения.</li>
          <li>
            При начале новой игры случайным образом загадывается слово, и игрок начинает процесс по
            его отгадыванию.
          </li>
          <li>
            После каждой введённой буквы выводим в консоль счётчик ошибок и текущее состояние
            виселицы (нарисованное ASCII символами).
          </li>
          <li>
            По завершении игры выводим результат (победа или поражение) и возвращаемся к состоянию
            №1 — предложение начать новую игру или выйти из приложения.
          </li>
        </ul>
        <h2>План работы над приложением</h2>
        <ol>
          <li>
            Найти в интернете словарь существительных в именительном падеже, отбросить из него
            слишком короткие слова. Этот словарь будет источником для выбора случайного загаданного
            слова для каждого раунда игры.
          </li>
          <li>
            Реализовать игровой цикл отгадывания букв и отображения текущего состояния виселицы.
          </li>
          <li>Реализовать цикл по перезапуску игры после победы/поражения.</li>
        </ol>
        <h2>Чеклист для самопроверки</h2>
        <h3>Функциональные требования:</h3>
        <ul>
          <li>
            Отсутствие валидации вводимых символов (валидными могут считаться, например, только
            маленькие буквы кириллицы). Невалидный ввод не должен увеличивать счётчик ошибок
            пользователя в игровом раунде.
          </li>
          <li>
            Повторно вводимый символ, отсутствующий в секретном слове, не должен считаться за
            ошибку.
          </li>
        </ul>
      </>
    </Layout>
  );
};

export default JsHangmanPage;
