"use client";

import Link from "next/link";
import styles from "./navbar.module.css";
import { useState, useEffect } from "react";
import { Spin as Hamburger } from "hamburger-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      window.scrollTo(0, 0);
    }
  }, [isOpen]);

  return (
    <nav className={`${styles.navbarContainer} ${isOpen ? styles.open : ""}`}>
      <ul className={`${styles.ul} ${isOpen ? styles.open : ""}`}>
        <li className={styles.li}>
          <Link
            className={styles.links}
            href="#about"
            onClick={() => setIsOpen(!isOpen)}
          >
            About
          </Link>
        </li>
        <li className={styles.li}>
          <Link
            className={styles.links}
            href="#skills"
            onClick={() => setIsOpen(!isOpen)}
          >
            Skills
          </Link>
        </li>
        <li className={styles.li}>
          <Link
            className={styles.links}
            href="#projects"
            onClick={() => setIsOpen(!isOpen)}
          >
            Projects
          </Link>
        </li>
        <li className={styles.li}>
          <Link
            className={styles.links}
            href="#contact"
            onClick={() => setIsOpen(!isOpen)}
          >
            Contact
          </Link>
        </li>
      </ul>
      <div className={styles.hamburgerContainer}>
        <Hamburger toggled={isOpen} toggle={setIsOpen} />
      </div>
    </nav>
  );
}
