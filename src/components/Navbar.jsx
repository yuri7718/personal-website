import { Header } from "@heroui/react";
import { NavLink, useLocation } from "react-router-dom";

const navItems = [
  { label: "Projects", to: "/#projects" },
  { label: "Artworks", to: "/#artworks" },
  { label: "Contact", to: "/#contact" },
];

const navLinkClass =
  "min-h-10 rounded-full px-3.5 py-2 text-[15px] font-semibold text-[var(--site-text)] no-underline transition duration-200 ease-out hover:-translate-y-px hover:bg-[var(--site-accent-bg)] hover:text-[var(--site-heading)] focus-visible:-translate-y-px focus-visible:bg-[var(--site-accent-bg)] focus-visible:text-[var(--site-heading)]";

function scrollToHash(to) {
  const hash = to.split("#")[1];

  if (!hash) {
    return;
  }

  window.requestAnimationFrame(() => {
    document.getElementById(hash)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}

function Navbar() {
  const location = useLocation();

  return (
    <Header className="sticky top-0 z-10 flex min-h-18 flex-col items-start gap-3.5 border-b border-[var(--site-border)] bg-[color-mix(in_srgb,var(--site-bg)_88%,transparent)] px-5 py-4 backdrop-blur-md md:flex-row md:items-center md:justify-between md:gap-6 md:px-10">
      <NavLink
        className={`${navLinkClass} text-[var(--site-heading)]`}
        to="/"
        aria-label="Home"
      >
        Home
      </NavLink>

      <nav
        className="flex w-full flex-wrap items-center justify-start gap-2 md:w-auto md:justify-end"
        aria-label="Primary navigation"
      >
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            className={navLinkClass}
            to={item.to}
            onClick={() => {
              if (location.pathname === "/") {
                scrollToHash(item.to);
              }
            }}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </Header>
  );
}

export default Navbar;
