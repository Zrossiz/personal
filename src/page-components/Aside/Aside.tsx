import styles from './Aside.module.scss';

export const Aside = () => {
    return (
        <aside className={styles.aside}>
            <h2>Shtepa Mentoring</h2>
            <div>
                <div className={styles.title}>
                    <a href="/about">Обо мне</a>
                </div>
                <div className={styles.lang}>
                    <div className={styles.title}>JavaScript</div>
                    <div className={styles.subTitle}>
                        <a href="/roadmap/js/questions">
                            Вопросы для подготовки
                        </a>
                    </div>
                    <div className={styles.subTitle}>
                        <a href="/roadmap/js/links">
                            Полезные ссылки
                        </a>
                    </div>
                    <div className={styles.subTitle}>
                        <a href="/roadmap/js/projects">
                            Проекты
                        </a>
                    </div>
                </div>
                <div className={styles.lang}>
                    <div className={styles.title}>Go</div>
                    <div className={styles.subTitle}>
                        <a href="/roadmap/go/questions">
                            Вопросы для подготовки
                        </a>
                    </div>
                    <div className={styles.subTitle}>
                        <a href="/roadmap/go/links">
                            Полезные ссылки
                        </a>
                    </div>
                    <div className={styles.subTitle}>
                        <a href="/roadmap/go/projects">
                            Проекты
                        </a>
                    </div>
                </div>
            </div>
            
        </aside>
    )
}