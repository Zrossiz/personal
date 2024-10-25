import styles from './MobileMenu.module.scss';
import { IMobuleMenuProps } from './MobileMenu.props';
import Link from 'next/link';

export const MobileMenu = ({ setOpen }: IMobuleMenuProps) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.close} onClick={() => setOpen(false)}>X</div>
            <div>
                <ul>
                    <li>
                        <Link href="/">О проекте</Link>
                    </li>
                    <li>
                        <Link href="/about">Обо мне</Link>
                    </li>
                    <li>
                        <Link href="/roadmap/js">JavaScript</Link>
                    </li>
                    <li>
                        <Link href="/roadmap/go">Go</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}