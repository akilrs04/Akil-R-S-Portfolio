import React from "react";
import { experienceData } from "@/data/experience";
import styles from "@/styles/components/experience.module.css";
import { cn } from "@/lib/utils";

export function ExperienceSection() {
  return (
    <section id="experience" className="section-padding">
      <div className="container">
        <h2 style={{ fontSize: "2rem", fontWeight: 700, textAlign: "center" }}>
          Work <span className="gradient-text">Experience</span>
        </h2>
        <p
          style={{
            textAlign: "center",
            color: "var(--text-secondary)",
            marginTop: "0.5rem",
          }}
        >
          My professional track record and technical leadership
        </p>

        <div className={styles.timeline}>
          {experienceData.map((exp) => (
            <div key={exp.id} className={cn("glass-panel", styles.item)}>
              <div className={styles.header}>
                <div>
                  <h3 className={styles.role}>{exp.role}</h3>
                  <span className={styles.company}>{exp.company}</span>
                </div>
                <span className={styles.period}>{exp.period}</span>
              </div>

              <div className={styles.bulletList}>
                {exp.description.map((desc, idx) => (
                  <p key={idx} className={styles.bullet}>
                    {desc}
                  </p>
                ))}
              </div>

              <div className={styles.skills}>
                {exp.skills.map((skill) => (
                  <span key={skill} className={styles.skillBadge}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
