import { Button } from '@heroui/react'
import { useNavigate } from 'react-router-dom'
import ProjectCard from '../components/ProjectCard'
import SectionHeader from '../components/SectionHeader'
import projects from '../assets/projects.json'

const sections = [
  {
    id: 'artworks',
    label: 'Artworks',
    title: 'Visual Archive',
    description: 'Use this area for illustrations, sketches, generative pieces, and process notes.',
  },
  {
    id: 'contact',
    label: 'Contact',
    title: 'Get In Touch',
    description: 'Share your email, social profiles, or a contact form here.',
  },
]

const featuredProjects = projects.some((project) => project.featured)
  ? projects.filter((project) => project.featured).slice(0, 3)
  : projects.slice(0, 3)

function ProjectsSection() {
  const navigate = useNavigate()

  return (
    <section
      id="projects"
      className="border-t border-[var(--site-border)] px-5 py-16 text-left md:min-h-[52svh] md:px-10 md:py-[88px]"
    >
      <SectionHeader
        label="Projects"
        title="Selected Work"
        description="A few projects from research, software, and visual systems."
        action={
          <Button
            variant="secondary"
            onPress={() => {
              navigate('/projects')
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
    </section>
  )
}

function ContentSection({ id, label, title, description }) {
  return (
    <section
      id={id}
      className="border-t border-[var(--site-border)] px-5 py-16 text-left md:min-h-[52svh] md:px-10 md:py-[88px]"
    >
      <SectionHeader label={label} title={title} description={description} />
    </section>
  )
}

function HomePage() {
  return (
    <main className="flex flex-col">
      <section
        id="home"
        className="grid grid-cols-1 items-center gap-10 px-5 py-12 text-left md:grid-cols-[minmax(0,1.15fr)_minmax(220px,0.85fr)] md:px-10 md:py-16"
      >
        <div className="max-w-[690px]">
          <h1 className="my-5 text-4xl leading-tight font-medium text-[var(--site-heading)] md:my-8 md:text-6xl">
            Building digital things
          </h1>
          <p className="max-w-[640px] text-lg">
            A personal website for selected projects, artwork, and ways to get in touch.
          </p>
        </div>
      </section>

      <ProjectsSection />

      {sections.map((section) => (
        <ContentSection key={section.id} {...section} />
      ))}
    </main>
  )
}

export default HomePage
