import { Button } from '@heroui/react'
import { useNavigate } from 'react-router-dom'

function ProjectPageLayout({ project, actions, children }) {
  const navigate = useNavigate()

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

      <article>
        <header className="mb-12">
          <h1 className="mb-4 text-4xl leading-tight font-medium text-[var(--site-heading)] md:text-6xl">
            {project.title}
          </h1>
          {project.description ? (
            <p className="text-xl leading-8">{project.description}</p>
          ) : null}
          {project.period ? (
            <p className="mt-5 text-sm font-semibold tracking-[0.08em] text-[var(--site-accent)] uppercase">
              {project.period}
            </p>
          ) : null}

          {actions ? <div className="mt-8">{actions}</div> : null}
        </header>

        {children}
      </article>
    </main>
  )
}

export default ProjectPageLayout
