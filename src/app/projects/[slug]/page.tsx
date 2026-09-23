import { notFound } from "next/navigation";
import { projectsData } from "@/data/projects";
import { Button } from "@/components/common/Button";
import { ArrowLeft } from "lucide-react";
import { GithubIcon, ExternalLinkIcon } from "@/components/common/Icons";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="section-padding" style={{ paddingTop: "calc(var(--header-height) + 3rem)" }}>
      <div className="container" style={{ maxWidth: "800px" }}>
        <Button variant="ghost" size="sm" href="/projects" icon={<ArrowLeft size={16} />}>
          Back to Projects
        </Button>

        <div style={{ marginTop: "1.5rem", marginBottom: "2rem" }}>
          <span
            style={{
              fontSize: "0.85rem",
              color: "var(--accent-secondary)",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            {project.category}
          </span>
          <h1 style={{ fontSize: "2.75rem", fontWeight: 800, marginTop: "0.5rem" }}>
            {project.title}
          </h1>
          <p style={{ fontSize: "1.2rem", color: "var(--text-secondary)", marginTop: "0.75rem" }}>
            {project.tagline}
          </p>
        </div>

        <div
          className="glass-panel"
          style={{
            padding: "2rem",
            marginBottom: "2.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
          }}
        >
          <h2 style={{ fontSize: "1.25rem", fontWeight: 700 }}>Overview</h2>
          <p style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}>
            {project.description}
          </p>

          <div>
            <h3 style={{ fontSize: "1rem", fontWeight: 600, marginBottom: "0.75rem" }}>
              Technologies Used
            </h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  style={{
                    padding: "0.3rem 0.75rem",
                    borderRadius: "var(--radius-sm)",
                    background: "var(--bg-secondary)",
                    border: "1px solid var(--border-subtle)",
                    fontSize: "0.85rem",
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
            {project.liveUrl && (
              <Button variant="primary" href={project.liveUrl} icon={<ExternalLinkIcon size={16} />}>
                Visit Live Site
              </Button>
            )}
            {project.githubUrl && (
              <Button variant="secondary" href={project.githubUrl} icon={<GithubIcon size={16} />}>
                View Source Code
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
