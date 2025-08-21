'use client'

import { useEffect, useState } from 'react';
import styles from './header.module.scss'
import { usePathname } from 'next/navigation'

export function Header() {
    const pathname = usePathname();
    const [pageClass, setPageClass] = useState('');

    useEffect(() => {
        setPageClass(pathname.substring(1));
    }, [pathname])


    return (
        <header
            className={`${styles.headerContainer} ${styles[pageClass] || ''}`}
        >
            <div className={styles.headerContent}>
                <nav>
                    <a href="/" className={pathname === '/' ? styles.active : ''}>Welcome</a>
                    <a href="/mobile" className={pathname === '/mobile' ? styles.active : ''}>Mobile</a>
                    <a href="/desktop" className={pathname === '/desktop' ? styles.active : ''}>Desktop</a>
                    <a href="/about" className={pathname === '/about' ? styles.active : ''}>About</a>
                </nav>
            </div>
        </header>

    )
}