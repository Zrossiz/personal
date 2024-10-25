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
        </div>
    )
}