import { ILayoutProps } from './Layout.props';
import Head from 'next/head';
import styles from './Layout.module.scss';
import { Ad, Aside, Header } from '@/page-components';
import { useRouter } from 'next/router';
import { Breadcrumb } from '@/components';
import { useState } from 'react';

export const Layout = ({ children }: ILayoutProps) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Roadmap | Shtepa</title>
        <link rel="icon" type="image/x-icon" href="/favicon.svg" />
      </Head>
      <div className={styles.global}>
        <div className={styles.main}>
          <main>
            <Header />
            <Aside />
            <div className={styles.content}>
              {router.asPath != '/' && <Breadcrumb />}
              {children}
            </div>
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
