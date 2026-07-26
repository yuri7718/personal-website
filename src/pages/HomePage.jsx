import { Button } from "@heroui/react";
import { useNavigate } from "react-router-dom";
import AnimatedWebsite from "../components/AnimatedWebsite";
import ArtworkGrid from "../components/ArtworkGrid";
import ProjectCard from "../components/ProjectCard";
import SectionHeader from "../components/SectionHeader";
import artworks from "../assets/artworks";
import projects from "../assets/projects.json";
import { contentLayoutClass } from "../styles/layout";

const emailUser = "qiangxu1204";
const emailDomain = "gmail.com";

const getFeaturedOrder = (project) =>
  project.featuredOrder ?? Number.MAX_SAFE_INTEGER;

const featuredProjects = projects.some((project) => project.featured)
  ? projects
      .filter((project) => project.featured)
      .sort((a, b) => getFeaturedOrder(a) - getFeaturedOrder(b))
      .slice(0, 3)
  : projects.slice(0, 3);

const featuredArtworks = artworks.slice(0, 8);

function Section({ id, children }) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 border-t border-[var(--site-border)] ${contentLayoutClass}`}
    >
      {children}
    </section>
  );
}

function ProjectsSection() {
  const navigate = useNavigate();

  return (
    <Section id="projects">
      <SectionHeader
        label="Projects"
        title="Selected Work"
        description="A few projects from research, software, and visual systems"
        action={
          <Button
            variant="secondary"
            onPress={() => {
              navigate("/projects");
            }}
          >
            View all projects
          </Button>
        }
      />

      <div className="grid gap-5 md:grid-cols-3">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </Section>
  );
}

function ArtworkSection() {
  const navigate = useNavigate();

  return (
    <Section id="artwork">
      <SectionHeader
        label="Artwork"
        title="Visual Archive"
        description="A collection of oil paintings, illustrations, and sketches"
        action={
          <Button
            variant="secondary"
            onPress={() => {
              navigate("/artwork");
            }}
          >
            View all artwork
          </Button>
        }
      />
      <ArtworkGrid artworks={featuredArtworks} />
    </Section>
  );
}

function ContactSection() {
  return (
    <Section id="contact">
      <SectionHeader
        label="Contact"
        title="Get In Touch"
        description={
          <>
            If you like my work or are interested in collaborating, reach me at &nbsp;
            <span className="whitespace-nowrap">
              {emailUser} [at] {emailDomain}
            </span>
          </>
        }
      />
    </Section>
  );
}

function HomePage() {
  return (
    <main className="flex flex-col">
      <section
        id="home"
        className="grid scroll-mt-24 grid-cols-1 items-center gap-10 px-5 py-8 text-left md:grid-cols-[minmax(0,1.15fr)_minmax(220px,0.85fr)] md:px-10"
      >
        <div className="max-w-[690px] flex flex-col gap-2">
          <AnimatedWebsite />
          <p>Selected projects, artwork, and a way to get in touch</p>
        </div>
      </section>

      <ProjectsSection />
      <ArtworkSection />
      <ContactSection />
    </main>
  );
}

export default HomePage;
