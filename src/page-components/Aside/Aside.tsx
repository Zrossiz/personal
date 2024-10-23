import styles from './Aside.module.scss';
import Link from 'next/link';

export const Aside = () => {
  return (
    <aside className={styles.aside}>
      <div className={styles.wrapper}>
        <Link href="/">
          <h2>Штепа Mentoring</h2>
        </Link>
        <div>
          <div className={styles.title}>
            <Link href="/about">Обо мне</Link>
          </div>
          <div className={styles.lang}>
            <Link href="/roadmap/js">
              <div className={styles.title}>JavaScript</div>
            </Link>
            <div className={styles.subTitle}>
              <Link href="/roadmap/js/questions">Вопросы для подготовки</Link>
            </div>
            <div className={styles.subTitle}>
              <Link href="/roadmap/js/links">Полезные ссылки</Link>
            </div>
            <div className={styles.subTitle}>
              <Link href="/roadmap/js/projects">Проекты</Link>
            </div>
          </div>
          <div className={styles.lang}>
            <Link href="/roadmap/go">
              <div className={styles.title}>Go</div>
            </Link>
            <div className={styles.subTitle}>
              <Link href="/roadmap/go/questions">Вопросы для подготовки</Link>
            </div>
            <div className={styles.subTitle}>
              <Link href="/roadmap/go/links">Полезные ссылки</Link>
            </div>
            <div className={styles.subTitle}>
              <Link href="/roadmap/go/projects">Проекты</Link>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};
