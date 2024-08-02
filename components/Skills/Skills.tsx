"use client";
import styles from "./skills.module.css";
import Image from "next/image";

export default function Skills() {
  const toolBox = [
    {
      name: "React",
      icon: "react",
    },
    {
      name: "Next.js",
      icon: "next",
    },
    {
      name: "TypeScript",
      icon: "typescript",
    },
    {
      name: "Node.js",
      icon: "node",
    },
    {
      name: "Express",
      icon: "express",
    },
    {
      name: "MongoDB",
      icon: "mongodb",
    },
    {
      name: "GraphQL",
      icon: "graphql",
    },
    {
      name: "AWS",
      icon: "aws",
    },

    {
      name: "Netlify",
      icon: "netlify",
    },

    {
      name: "GitHub",
      icon: "github",
    },
  ];

  return (
    <section className={styles.toolsSection}>
      <h2 className={styles.toolsTitle}>Skills & Tools</h2>
      <h1 className={styles.toolsSubTitle}>My Toolbox & Things I Can Do</h1>
      <h3 className={styles.toolsDescription}>
        The skills, tools and technoligies I use to bring products to life:
      </h3>
      <div className={styles.toolBoxIconContainer}>
        {toolBox.map((tool) => (
          <div key={tool.name} className={styles.toolBoxIcon}>
            <Image
              src={`https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg`}
              alt={tool.name}
              width={72}
              height={72}
              className={styles.toolBoxIconImage}
            />
            <p className={styles.toolBoxIconName}>{tool.name}</p>
          </div>
        ))}
      </div>
      <h2>Current Working On:</h2>
      <p>Improving my skills....</p>
    </section>
  );
}
