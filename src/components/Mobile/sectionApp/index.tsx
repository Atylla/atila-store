import styles from './styles.module.scss'

export function SectionApps() {
    return (
        <div className={styles.contentContainer}>
            <section>
                <div className={styles.imagemFake}>
                </div>
            </section>
            <section>
                <h1>Em breve</h1>
                <p>
                    Novas Aplicações serão adicionadas em breve
                </p>
                <p>
                    Cada aplicação terá sua propria pagina de detalhes.
                </p>
                <span>Tecnologias</span>
                <span>Tecnologias</span>
                <span>Tecnologias</span>
            </section>
        </div>
    )
}
