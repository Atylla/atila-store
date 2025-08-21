import { SectionApps } from '@/components/Mobile/sectionApp'
import styles from './page.module.scss'

export default function Mobile() {
    return (
        <>
        <title>Store Mobile</title>
        <section className={styles.contentContainer}>
            <h1>Aplicativos Mobile</h1>
            <p>Esses aplicativos foram criados por mim</p>

            <div>
                <SectionApps />
                <SectionApps />
                <SectionApps />
            </div>
        </section>
        </>
    )
}