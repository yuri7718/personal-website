import { Card, Chip } from "@heroui/react";
import { Link } from "react-router-dom";

const projectImages = import.meta.glob(
  "../assets/**/*.{gif,jpg,jpeg,png,webp}",
  {
    eager: true,
    query: "?url",
    import: "default",
  },
);

function getProjectImage(image) {
  if (!image) {
    return "";
  }

  if (/^https?:\/\//.test(image) || image.startsWith("/")) {
    return image;
  }

  return projectImages[`../assets/${image}`] ?? "";
}

function ProjectCard({ project }) {
  const { slug, title, description, tags = [], image, period } = project;
  const imageSrc = getProjectImage(image);
  const cardContent = (
    <Card className="h-full overflow-hidden rounded-lg border border-[var(--site-border)] bg-[var(--surface)] transition duration-200 ease-out hover:-translate-y-1">
      {imageSrc ? (
        <img
          className="aspect-[4/3] w-full object-cover"
          src={imageSrc}
          alt=""
        />
      ) : (
        <div className="aspect-[4/3] w-full bg-[var(--surface-secondary)]" />
      )}

      <Card.Header className="px-5 pt-5 pb-2">
        {period ? (
          <p className="mb-2 text-xs font-semibold tracking-[0.08em] text-[var(--site-accent)] uppercase">
            {period}
          </p>
        ) : null}
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
          <div className="mt-5 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Chip
                key={tag}
                className="bg-[var(--site-accent-bg)] text-[var(--site-heading)]"
                size="sm"
                variant="soft"
              >
                {tag}
              </Chip>
            ))}
          </div>
        ) : null}
      </Card.Content>
    </Card>
  );

  if (!slug) {
    return cardContent;
  }

  return (
    <Link className="block h-full no-underline" to={`/projects/${slug}`}>
      {cardContent}
    </Link>
  );
}

export default ProjectCard;
