import { Header } from "@/components/Header";
import styles from './home.module.scss'
import { AboutButton } from "@/components/Home/AboutButton";

export default function Home() {
  return (
    <>
    <title>Atila Store</title>
      <main className={styles.contentContainer}>
        <section>
          <h1>Atila Storage</h1>
          <p>
            Uma aplicação web contruida como <br />
            <span>portfólio</span> para hospedar meus apps <span>mobile</span> e <span>desktop</span>
          </p>
        </section>
        <AboutButton />
      </main>

    </>
  );
}
