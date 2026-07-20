import { Button, Link } from '@heroui/react'

function ResourceLink({ href, icon: Icon, children }) {
  const isUnavailable = !href || href === '#'
  const content = (
    <>
      {Icon ? <Icon size={16} strokeWidth={2} aria-hidden="true" /> : null}
      {children}
    </>
  )

  if (isUnavailable) {
    return (
      <Button
        className="inline-flex min-h-10 items-center gap-2 rounded-full border border-[var(--site-border)] px-3.5 py-2 text-sm font-semibold"
        isDisabled
        variant="secondary"
      >
        {content}
      </Button>
    )
  }

  return (
    <Link
      className="inline-flex min-h-10 items-center gap-2 rounded-full border border-[var(--site-border)] px-3.5 py-2 text-sm font-semibold text-[var(--site-heading)] no-underline transition duration-200 ease-out hover:-translate-y-px hover:bg-[var(--site-accent-bg)]"
      href={href}
      rel="noreferrer"
      target="_blank"
    >
      {content}
    </Link>
  )
}

export default ResourceLink
