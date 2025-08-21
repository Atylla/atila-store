import { SectionApps } from '@/components/Mobile/sectionApp'
import styles from './page.module.scss'

export default function Mobile() {
    return (
        <>
            <title>Mobile | Atila Store</title>
            <section className={styles.contentContainer}>
                <h1>Aplicativos Mobile</h1>
                <p>
                    Estes aplicativos mobile foram criados por mim para demonstrar minhas habilidades em desenvolvimento para dispositivos móveis.
                    Cada app é otimizado para performance e experiência do usuário, permitindo que recrutadores e avaliadores testem facilmente minhas criações em smartphones e tablets.
                </p>

                <div>
                    <SectionApps />
                </div>
            </section>
        </>
    )
}