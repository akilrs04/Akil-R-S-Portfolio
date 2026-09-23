import React from "react";
import { skillsData } from "@/data/skills";
import styles from "@/styles/components/skills.module.css";
import { cn } from "@/lib/utils";

export function SkillsSection() {
  return (
    <section id="skills" className="section-padding">
      <div className="container">
        <h2 style={{ fontSize: "2rem", fontWeight: 700, textAlign: "center" }}>
          Skills & <span className="gradient-text">Technologies</span>
        </h2>
        <p
          style={{
            textAlign: "center",
            color: "var(--text-secondary)",
            marginTop: "0.5rem",
          }}
        >
          Specialized expertise across the modern development lifecycle
        </p>

        <div className={styles.categoriesGrid}>
          {skillsData.map((category) => (
            <div
              key={category.category}
              className={cn("glass-panel", styles.categoryCard)}
            >
              <h3 className={styles.categoryTitle}>{category.category}</h3>
              <ul className={styles.skillsList}>
                {category.skills.map((skill) => (
                  <li key={skill.name} className={styles.skillItem}>
                    <span className={styles.skillName}>{skill.name}</span>
                    <span className={styles.skillLevel}>{skill.level}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
