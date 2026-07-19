import { Button } from '@heroui/react'
import { useNavigate, useParams } from 'react-router-dom'
import projects from '../../assets/projects.json'

function ProjectPlaceholderPage() {
  const navigate = useNavigate()
  const { slug } = useParams()
  const project = projects.find((item) => item.slug === slug)

  if (!project) {
    return (
      <main className="px-5 py-16 text-left md:px-10 md:py-[88px]">
        <h1 className="mb-4 text-4xl font-medium text-[var(--site-heading)]">
          Project not found
        </h1>
        <Button
          variant="secondary"
          onPress={() => {
            navigate('/projects')
          }}
        >
          Back to projects
        </Button>
      </main>
    )
  }

  return (
    <main className="px-5 py-16 text-left md:px-10 md:py-[88px]">
      <Button
        className="mb-10"
        variant="secondary"
        onPress={() => {
          navigate('/projects')
        }}
      >
        Back to projects
      </Button>

      <article className="max-w-[760px]">
        <p className="mb-3.5 text-[13px] font-extrabold tracking-[0.08em] text-[var(--site-accent)] uppercase">
          Project
        </p>
        <h1 className="my-5 text-4xl leading-tight font-medium text-[var(--site-heading)] md:my-8 md:text-6xl">
          {project.title}
        </h1>
        {project.description ? (
          <p className="text-xl leading-8">{project.description}</p>
        ) : (
          <p className="text-xl leading-8">
            This project page is ready for a custom case study.
          </p>
        )}
      </article>
    </main>
  )
}

export default ProjectPlaceholderPage
