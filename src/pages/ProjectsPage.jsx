import ProjectCard from "../components/ProjectCard";
import SectionHeader from "../components/SectionHeader";
import projects from "../assets/projects.json";
import { contentLayoutClass } from "../styles/layout";

function ProjectsPage() {
  return (
    <main className={contentLayoutClass}>
      <SectionHeader
        label="Projects"
        title="All Projects"
        description="A complete list of selected projects, experiments, and research work"
      />

      <div className="grid gap-5 md:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </main>
  );
}

export default ProjectsPage;
