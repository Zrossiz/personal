import { ILayoutProps } from "./Layout.props"
import Head from "next/head"
import styles from './Layout.module.scss';

export const Layout = ({ children }: ILayoutProps) => {
    return (
        <>
            <Head>
                <title>Roadmap | Shtepa</title>
            </Head>
            <div className={styles.global}>
                <div className={styles.main}>
                    <main>
                        <aside className={styles.aside}>
                            
                        </aside>
                        <div className={styles.content}>
                            {children}
                        </div>
                    </main>
                </div>
            </div>
        </>
    )
}