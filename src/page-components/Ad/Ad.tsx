import styles from './Ad.module.scss';
import Image from 'next/image';

export const Ad = () => {
    return (
        <div className={styles.adWrapper}>
            <div className={styles.ad}>
                <div className={styles.img}>
                    <Image src={"/me.jpg"} fill alt="Shtepa Egor.jpg"/>
                </div>
                <div className={styles.title}>
                    Помощь с проектом <br />
                    Менторство
                </div>
                <div className={styles.tgLink}>
                    <a href="https://t.me/User0Null0" target="_blank">Telegram</a>
                </div>
            </div>
        </div>
    )
}