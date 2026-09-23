import { projectsData } from "@/data/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Button } from "@/components/common/Button";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Projects",
  description: "Comprehensive portfolio of projects, apps, and codebases developed by Akil R S.",
};

export default function ProjectsPage() {
  return (
    <div className="section-padding" style={{ paddingTop: "calc(var(--header-height) + 3rem)" }}>
      <div className="container">
        <div style={{ marginBottom: "2.5rem" }}>
          <Button variant="ghost" size="sm" href="/" icon={<ArrowLeft size={16} />}>
            Back to Home
          </Button>
          <h1 style={{ fontSize: "2.5rem", fontWeight: 800, marginTop: "1rem" }}>
            All <span className="gradient-text">Projects</span>
          </h1>
          <p style={{ color: "var(--text-secondary)", marginTop: "0.5rem" }}>
            A complete collection of applications, tools, and experiments.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "2rem",
          }}
        >
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
