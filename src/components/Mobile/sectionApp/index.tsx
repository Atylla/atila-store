import styles from './styles.module.scss'

export function SectionApps() {
    return (
        <div className={styles.contentContainer}>
            <section>
                <div className={styles.imagemFake}>
                </div>
            </section>
            <section>
                <h1>Atlas Notes</h1>
                <p>
                    Uma aplicação pensada para simplificar sua rotina.
                    Com interface intuitiva e responsiva, você pode organizar tarefas,
                    anotar ideias e compartilhar conteúdos em poucos cliques.
                </p>
                <p>
                    Criada com foco em performance, escalabilidade e experiência de usuário.
                </p>
                <span>React</span>
                <span>TypeScript</span>
                <span>Node.js</span>
            </section>
        </div>
    )
}
