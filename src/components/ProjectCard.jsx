import { Card } from '@heroui/react'
import { Link } from 'react-router-dom'

function ProjectCard({ project }) {
  const { slug, title, description, tags = [], image } = project
  const cardContent = (
    <Card className="h-full overflow-hidden rounded-lg border border-[var(--site-border)] bg-[var(--surface)] transition duration-200 ease-out hover:-translate-y-1">
      {image ? (
        <img
          className="aspect-[4/3] w-full object-cover"
          src={image}
          alt=""
        />
      ) : (
        <div className="aspect-[4/3] w-full bg-[var(--surface-secondary)]" />
      )}

      <Card.Header className="px-5 pt-5 pb-2">
        <Card.Title className="text-lg leading-snug font-medium text-[var(--site-heading)]">
          {title}
        </Card.Title>
      </Card.Header>

      <Card.Content className="px-5 pb-5">
        {description ? (
          <Card.Description className="text-sm leading-6 text-[var(--site-text)]">
            {description}
          </Card.Description>
        ) : null}

        {tags.length > 0 ? (
          <ul className="mt-5 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full bg-[var(--site-accent-bg)] px-2.5 py-1 text-xs font-semibold text-[var(--site-heading)]"
              >
                {tag}
              </li>
            ))}
          </ul>
        ) : null}
      </Card.Content>
    </Card>
  )

  if (!slug) {
    return cardContent
  }

  return (
    <Link className="block h-full no-underline" to={`/projects/${slug}`}>
      {cardContent}
    </Link>
  )
}

export default ProjectCard
