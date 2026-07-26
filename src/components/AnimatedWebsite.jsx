import { memo, useEffect, useRef, useState } from "react";
import { Button } from "@heroui/react";
import { animate } from "animejs";
import { RotateCcw } from "lucide-react";
import WebsiteSVG from "../assets/website.svg?raw";

const WebsiteGraphic = memo(function WebsiteGraphic({ containerRef }) {
  return (
    <div
      ref={containerRef}
      className="min-w-0 flex-1 text-[var(--site-heading)] [&_svg]:block [&_svg]:h-auto [&_svg]:w-full"
      role="img"
      aria-label="Website"
      dangerouslySetInnerHTML={{ __html: WebsiteSVG }}
    />
  );
});

function AnimatedWebsite() {
  const containerRef = useRef(null);
  const animationRef = useRef(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) {
      return undefined;
    }

    const paths = [...container.querySelectorAll("mask path")];
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    setPrefersReducedMotion(reducedMotion);

    paths.forEach((path) => {
      const length = path.getTotalLength();
      path.style.stroke = "currentColor";
      path.style.strokeDasharray = `${length}`;
      path.style.strokeDashoffset = reducedMotion ? "0" : `${length}`;
    });

    if (reducedMotion) {
      return undefined;
    }

    setIsAnimating(true);

    const animation = animate(paths, {
      strokeDashoffset: 0,
      duration: 200,
      delay: (_, index) => index * 200,
      ease: "inOutSine",
      loop: false,
      alternate: true,
      onComplete: () => setIsAnimating(false),
    });

    animationRef.current = animation;

    return () => {
      animation.revert();
      animationRef.current = null;
    };
  }, []);

  const replayAnimation = () => {
    if (!animationRef.current) {
      return;
    }

    setIsAnimating(true);
    animationRef.current.restart();
  };

  return (
    <div className="flex w-full max-w-[395px] items-center gap-2">
      <WebsiteGraphic containerRef={containerRef} />
      <Button
        isIconOnly
        size="sm"
        variant="tertiary"
        aria-label="Replay animation"
        isDisabled={prefersReducedMotion || isAnimating}
        onClick={replayAnimation}
      >
        <RotateCcw size={16} />
      </Button>
    </div>
  );
}

export default AnimatedWebsite;
