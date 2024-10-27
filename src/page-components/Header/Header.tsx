import { MobileMenu } from '..';
import styles from './Header.module.scss';
import { useState } from 'react';

export const Header = () => {
    const [openMobileMenu, setOpenMobileMenu] = useState<boolean>(true);

    return (
        <header className={styles.wrapper}>
            <div className={styles.burger} onClick={() => setOpenMobileMenu(true)}>burger</div>
            {openMobileMenu && <MobileMenu setOpen={setOpenMobileMenu}/>}
        </header>
    )
}