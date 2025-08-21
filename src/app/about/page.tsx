import styles from './page.module.scss';

export default function About() {
    return (
        <>
            <title>Sobre | Atila Store</title>
            <section className={styles.aboutContainer}>
                <h1>Sobre Mim</h1>
                <p>
                    Olá! Eu sou o Atila, desenvolvedor de software e criador de aplicativos mobile e desktop.
                    Criei este site como um portfólio interativo, para que meus trabalhos fiquem acessíveis de forma prática
                    e gratuita para qualquer pessoa, principalmente recrutadores que queiram testar minhas aplicações.
                </p>
                <p>
                    Minha missão com a Atila Store é mostrar minha experiência de desenvolvimento,
                    desde a concepção da interface até a implementação das funcionalidades,
                    de forma clara e profissional. Cada app neste site é um exemplo do meu estilo de trabalho,
                    atenção aos detalhes e foco na experiência do usuário.
                </p>
                <h2>Habilidades e Tecnologias</h2>
                <ul>
                    <li>React / Next.js</li>
                    <li>TypeScript</li>
                    <li>Node.js</li>
                    <li>SCSS / CSS Modules / Styled-components</li>
                    <li>Desenvolvimento mobile e desktop</li>
                </ul>
                <p>
                    Se você é recrutador ou entusiasta de tecnologia, fique à vontade para explorar meus apps,
                    baixar e testar cada projeto. Meu objetivo é tornar o acesso aos meus trabalhos fácil, rápido e agradável.
                </p>
            </section>
        </>
    )
}
