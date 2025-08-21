'use client'

import { useRouter } from 'next/navigation'
import styles from './styles.module.scss'

export function AboutButton() {
    const router = useRouter();

    const handleNavigationAbout = () => {
        router.push('/about');
    }

    return (
        <button className={styles.aboutButton} onClick={handleNavigationAbout}>
            Saiba mais
        </button>
    )
}