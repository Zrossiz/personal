import { ILayoutProps } from "./Layout.props"
import Head from "next/head"
import styles from './Layout.module.scss';
import { Aside } from "@/page-components";

export const Layout = ({ children }: ILayoutProps) => {
    return (
        <>
            <Head>
                <title>Roadmap | Shtepa</title>
            </Head>
            <div className={styles.global}>
                <div className={styles.main}>
                    <main>
                        <Aside />
                        <div className={styles.content}>
                            {children}
                        </div>
                    </main>
                </div>
            </div>
        </>
    )
}