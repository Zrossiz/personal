import styles from './MobileMenu.module.scss';
import { IMobuleMenuProps } from './MobileMenu.props';
import Link from 'next/link';
import { Ad } from '..';

export const MobileMenu = ({ setOpen }: IMobuleMenuProps) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.close} onClick={() => setOpen(false)}>X</div>
            <div className={styles.listWrapper}>
                <ul className={styles.list}>
                    <li>
                        <Link href="/" onClick={() => setOpen(false)}>О проекте</Link>
                    </li>
                    <li>
                        <Link href="/about" onClick={() => setOpen(false)}>Обо мне</Link>
                    </li>
                    <li>
                        <Link href="/roadmap/js" onClick={() => setOpen(false)}>JavaScript</Link>
                    </li>
                    <li>
                        <Link href="/roadmap/go" onClick={() => setOpen(false)}>Go</Link>
                    </li>
                </ul>
            </div>
            <div className={styles.ad}>
                <Ad />
            </div>
        </div>
    )
}