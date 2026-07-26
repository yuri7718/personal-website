import { useEffect, useRef } from "react";
import { Modal } from "@heroui/react";
import { animate } from "animejs";
import featuredArtworks from "../assets/artworks";

const artworkLayouts = [
  [
    "col-start-1 row-start-1 col-span-2 row-span-2 md:col-start-1 md:row-start-1",
    "col-start-1 row-start-3 row-span-2 md:col-start-3 md:row-start-1",
    "col-start-2 row-start-3 md:col-start-4 md:row-start-1",
    "col-start-2 row-start-4 md:col-start-4 md:row-start-2",
    "col-start-1 row-start-5 col-span-2 row-span-2 md:col-start-3 md:row-start-3",
    "col-start-2 row-start-7 row-span-2 md:col-start-1 md:row-start-3",
    "col-start-1 row-start-7 md:col-start-2 md:row-start-3",
    "col-start-1 row-start-8 md:col-start-2 md:row-start-4",
  ],
  [
    "col-start-2 row-start-1 md:col-start-1 md:row-start-1",
    "col-start-1 row-start-3 col-span-2 row-span-2 md:col-start-2 md:row-start-1",
    "col-start-1 row-start-1 row-span-2 md:col-start-4 md:row-start-1",
    "col-start-2 row-start-2 md:col-start-1 md:row-start-2",
    "col-start-2 row-start-5 row-span-2 md:col-start-1 md:row-start-3",
    "col-start-1 row-start-5 md:col-start-2 md:row-start-3",
    "col-start-1 row-start-7 col-span-2 row-span-2 md:col-start-3 md:row-start-3",
    "col-start-1 row-start-6 md:col-start-2 md:row-start-4",
  ],
];

const artworkGroupSize = 8;

function ArtworkGrid({ artworks = featuredArtworks }) {
  const gridRef = useRef(null);
  const artworkGroups = [];

  for (let index = 0; index < artworks.length; index += artworkGroupSize) {
    artworkGroups.push(artworks.slice(index, index + artworkGroupSize));
  }

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
    <div ref={gridRef} className="flex flex-col gap-2">
      {artworkGroups.map((group, groupIndex) => (
        <div
          key={group[0].id}
          className="grid auto-rows-[110px] grid-cols-2 gap-2 sm:auto-rows-[150px] md:auto-rows-[170px] md:grid-cols-4 xl:auto-rows-[210px]"
        >
          {group.map((artwork, groupItemIndex) => {
            const index = groupIndex * artworkGroupSize + groupItemIndex;
            const layout = artworkLayouts[groupIndex % artworkLayouts.length];

            return (
              <Modal key={artwork.id}>
                <Modal.Trigger
                  className={`artwork-grid-item h-full w-full overflow-hidden bg-[var(--surface-secondary)] opacity-0 will-change-transform ${
                  layout[groupItemIndex]
                }`}
                  aria-label={`View artwork ${index + 1}`}
                >
                  <figure className="m-0 h-full w-full overflow-hidden">
                    <img
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-[1.03] motion-reduce:transition-none"
                      src={artwork.src}
                      alt={`Artwork ${index + 1}`}
                      width={artwork.width}
                      height={artwork.height}
                      loading={index < 4 ? "eager" : "lazy"}
                      decoding="async"
                    />
                  </figure>
                </Modal.Trigger>

                <Modal.Backdrop variant="blur">
                  <Modal.Container size="cover">
                    <Modal.Dialog
                      className="p-2 shadow-none sm:p-4"
                      aria-label={`Artwork ${index + 1}`}
                    >
                      <Modal.CloseTrigger className="z-10 bg-black/60 text-white hover:bg-black/80" />
                      <Modal.Body className="flex items-center justify-center overflow-hidden p-0">
                        <img
                          className="max-h-full max-w-full object-contain"
                          src={artwork.src}
                          alt={`Artwork ${index + 1}, enlarged view`}
                          width={artwork.width}
                          height={artwork.height}
                          decoding="async"
                        />
                      </Modal.Body>
                    </Modal.Dialog>
                  </Modal.Container>
                </Modal.Backdrop>
              </Modal>
            );
          })}
        </div>
      ))}
    </div>
  );
}

export default ArtworkGrid;
