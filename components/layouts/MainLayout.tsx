import { FC, PropsWithChildren } from 'react';

import Head from 'next/head';

import { Navbar } from '../Navbar';
import  styles from './MainLayout.module.css';

export const MainLayout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className={styles.container}>
            <Head>
                <title>My Next App</title>
                <meta name="description" content="Next App" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
        
            <Navbar/>
        
            <main className={styles.main}>
                { children }
            </main>
        </div>
    )
}
