import styles from './Aside.module.scss';
import Link from 'next/link';

export const Aside = () => {
  return (
    <aside className={styles.aside}>
      <h2>Штепа Mentoring</h2>
      <div>
        <div className={styles.title}>
          <Link href="/about">Обо мне</Link>
        </div>
        <div className={styles.lang}>
          <div className={styles.title}>JavaScript</div>
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
          <div className={styles.title}>Go</div>
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
    </aside>
  );
};
