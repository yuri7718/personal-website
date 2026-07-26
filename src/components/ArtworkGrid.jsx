import { useEffect, useRef } from "react";
import { animate } from "animejs";
import featuredArtworks from "../assets/artworks";

function ArtworkGrid({ artworks = featuredArtworks }) {
  const gridRef = useRef(null);

  useEffect(() => {
    const grid = gridRef.current;

    if (!grid) {
      return undefined;
    }

    const items = grid.querySelectorAll(".artwork-grid-item");
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      items.forEach((item) => {
        item.style.opacity = "1";
        item.style.transform = "scale(1)";
      });
      return undefined;
    }

    const animation = animate(items, {
      opacity: [{ from: 0, to: 1 }],
      scale: [{ from: 0, to: 1 }],
      duration: (_, index) => 600 + index * 75,
      delay: (_, index) => index * 50,
      ease: "outExpo",
    });

    return () => {
      animation.revert();
    };
  }, [artworks]);

  return (
    <div
      ref={gridRef}
      className="-mx-5 grid grid-cols-2 gap-px bg-[var(--site-border)] md:-mx-10 md:grid-cols-4"
    >
      {artworks.map((artwork, index) => (
        <figure
          key={artwork.id}
          className="artwork-grid-item m-0 aspect-square overflow-hidden bg-[var(--surface-secondary)] opacity-0 will-change-transform"
        >
          <img
            className="h-full w-full object-cover"
            src={artwork.src}
            alt={`Artwork ${index + 1}`}
            width={artwork.width}
            height={artwork.height}
            loading={index < 4 ? "eager" : "lazy"}
            decoding="async"
          />
        </figure>
      ))}
    </div>
  );
}

export default ArtworkGrid;
