import { SectionApps } from '@/components/Mobile/sectionApp'
import styles from './page.module.scss'

export default function Desktop() {
    return (
        <>
            <title>Desktop | Atila Store</title>
            <section className={styles.contentContainer}>
                <h1>Aplicativos Desktop</h1>
                <p>
                    Estes aplicativos desktop foram desenvolvidos por mim como parte do meu portfólio.
                    Cada projeto mostra minhas habilidades em design de interfaces, lógica de programação e integração com sistemas.
                    O objetivo é fornecer aos recrutadores e avaliadores uma forma prática de testar, baixar e explorar meus trabalhos diretamente no computador.
                </p>

                <div>
                    <SectionApps />
                    <SectionApps />
                    <SectionApps />
                </div>
            </section>
        </>
    )
}