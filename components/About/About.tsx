"use client";
import Image from "next/image";
import styles from "./about.module.css";
import headshot from "../../public/images/headshot.jpg";

export default function About() {
  return (
    <section className={styles.aboutSection}>
      <h2 className={styles.aboutTitle}>About</h2>
      <h1 className={styles.aboutSubTitle}>Who is Cj?</h1>
      <div className={styles.bioContainer}>
        <div className={styles.headshotWrapper}>
          <Image src={headshot} alt="headshot" width={200} height={300} />
        </div>
        <div>
          <h2 className={styles.aboutHeader}>
            A curiosity-drive Front End Developer with design chops
          </h2>
          <p>
            I am a self-taught developer with a background in design. I am
            passionate about creating beautiful and functional user interfaces.
            I am always looking for new challenges and opportunities to learn
            new things.
          </p>
          <p>
            I am a self-taught developer with a background in design. I am
            passionate about creating beautiful and functional user interfaces.
            I am always looking for new challenges and opportunities to learn
            new things.
          </p>
          <p>
            I am a self-taught developer with a background in design. I am
            passionate about creating beautiful and functional user interfaces.
            I am always looking for new challenges and opportunities to learn
            new things.
          </p>

          <h2>Get in touch</h2>
        </div>
      </div>
    </section>
  );
}
