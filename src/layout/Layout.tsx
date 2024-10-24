import { ILayoutProps } from './Layout.props';
import Head from 'next/head';
import styles from './Layout.module.scss';
import { Ad, Aside } from '@/page-components';

export const Layout = ({ children }: ILayoutProps) => {
  return (
    <>
      <Head>
        <title>Roadmap | Shtepa</title>
        <link rel="icon" type="image/x-icon" href="/favicon.svg" />
      </Head>
      <div className={styles.global}>
        <div className={styles.main}>
          <main>
            <Aside />
            <div className={styles.content}>{children}</div>
            <Ad />
          </main>
        </div>
        <div className={styles.footer}>
          <footer>
            <p>
              &copy; 2024 Платформа для обучения программированию (Штепа Mentoring). Все права
              защищены.
            </p>
          </footer>
        </div>
      </div>
    </>
  );
};
