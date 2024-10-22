import styles from './Aside.module.scss';
import { useState } from 'react';

export const Aside = () => {
    return (
        <aside className={styles.aside}>
            <h2>Shtepa Mentoring</h2>
            <div>
                <div className={styles.title}>
                    <a href="">Обо мне</a>
                </div>
                <div className={styles.lang}>
                    <div className={styles.title}>JavaScript</div>
                    <div className={styles.subTitle}>
                        <a href="">
                            Вопросы для подготовки
                        </a>
                    </div>
                    <div className={styles.subTitle}>
                        <a href="">
                            Полезные ссылки
                        </a>
                    </div>
                    <div className={styles.subTitle}>
                        Проекты
                    </div>
                </div>
                <div className={styles.lang}>
                    <div className={styles.title}>Go</div>
                    <div className={styles.subTitle}>
                        <a href="">
                            Вопросы для подготовки
                        </a>
                    </div>
                    <div className={styles.subTitle}>
                        <a href="">
                            Полезные ссылки
                        </a>
                    </div>
                    <div className={styles.subTitle}>
                        <a href="">
                            Проекты
                        </a>
                    </div>
                </div>
            </div>
            
        </aside>
    )
}