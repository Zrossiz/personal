import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './Breadcrumb.module.scss';

export const Breadcrumb = () => {
  const router = useRouter();
  const backPagePath = router.asPath.split('/').slice(0, -1).join('/');

  return (
    <div className={styles.wrapper}>
      <Link href={backPagePath || '/'}>Назад</Link>
    </div>
  );
};
