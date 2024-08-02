import Image from "next/image";
import styles from "./page.module.css";
import Skills from "@components//Skills/Skills";
import About from "@components//About/About";

export default function Home() {
  return (
    <main className={styles.main}>
      <About />
      <Skills />
    </main>
  );
}
