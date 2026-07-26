function SectionHeader({ label, title, description, action }) {
  return (
    <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="mb-3.5 text-[13px] font-extrabold tracking-[0.08em] text-[var(--site-accent)] uppercase">
          {label}
        </p>
        <h2 className="mb-2 text-2xl leading-[1.18] font-medium text-[var(--site-heading)] md:text-3xl">
          {title}
        </h2>
        {description ? (
          <p className="max-w-[640px] text-lg">{description}</p>
        ) : null}
      </div>

      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}

export default SectionHeader;
