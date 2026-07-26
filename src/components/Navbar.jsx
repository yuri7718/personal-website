import { Header } from "@heroui/react";
import { NavLink, useLocation } from "react-router-dom";

const navItems = [
  { label: "Projects", to: "/#projects" },
  { label: "Artwork", to: "/#artwork" },
  { label: "Contact", to: "/#contact" },
];

const navLinkClass =
  "min-h-9 rounded-full px-2 py-1.5 text-[13px] font-semibold text-[var(--site-text)] no-underline transition duration-200 ease-out hover:-translate-y-px hover:bg-[var(--site-accent-bg)] hover:text-[var(--site-heading)] focus-visible:-translate-y-px focus-visible:bg-[var(--site-accent-bg)] focus-visible:text-[var(--site-heading)] sm:min-h-10 sm:px-3.5 sm:py-2 sm:text-[15px]";

function Navbar() {
  const location = useLocation();

  function handleNavClick(to) {
    const targetHash = to.slice(to.indexOf("#"));

    if (location.pathname === "/" && location.hash === targetHash) {
      document.getElementById(targetHash.slice(1))?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }

  return (
    <Header className="sticky top-0 z-10 flex min-h-14 flex-row items-center justify-between gap-1 border-b border-[var(--site-border)] bg-[color-mix(in_srgb,var(--site-bg)_88%,transparent)] px-3 backdrop-blur-md sm:min-h-16 sm:gap-4 sm:px-5 md:gap-6 md:px-10">
      <NavLink
        className={`${navLinkClass} text-[var(--site-heading)]`}
        to="/"
        aria-label="Home"
      >
        Home
      </NavLink>

      <nav
        className="flex shrink-0 flex-nowrap items-center justify-end gap-0.5 sm:gap-2"
        aria-label="Primary navigation"
      >
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            className={navLinkClass}
            to={item.to}
            onClick={() => handleNavClick(item.to)}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </Header>
  );
}

export default Navbar;
