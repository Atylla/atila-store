'use client'

import { useEffect, useState } from 'react';
import styles from './header.module.scss'
import { usePathname } from 'next/navigation'
import Link from 'next/link';

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
                    <Link href="/" className={pathname === '/' ? styles.active : ''}>Welcome</Link>
                    <Link href="/mobile" className={pathname === '/mobile' ? styles.active : ''}>Mobile</Link>
                    <Link href="/desktop" className={pathname === '/desktop' ? styles.active : ''}>Desktop</Link>
                    <Link href="/about" className={pathname === '/about' ? styles.active : ''}>About</Link>
                </nav>
            </div>
        </header>

    )
}