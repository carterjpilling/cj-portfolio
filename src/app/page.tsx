import Image from "next/image";
import styles from "./page.module.css";
import Skills from "@components//Skills/Skills";
import About from "@components//About/About";
import Navbar from "@components//Nav/Navbar";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <About />
      <Skills />
    </main>
  );
}
