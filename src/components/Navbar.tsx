import { useEffect, useRef, useState } from "react";

// Hash links work from any page (e.g. /blog) because they start with "/".
const LINKS = [
  { id: "about", label: "about" },
  { id: "stack", label: "stack" },
  { id: "projects", label: "projects" },
  { id: "writings", label: "writings" },
  { id: "reading", label: "reading" },
  { id: "contact", label: "contact" },
] as const;

type Indicator = { x: number; w: number } | null;

export const Navbar = () => {
  const [active, setActive] = useState<string | null>(null);
  const [ind, setInd] = useState<Indicator>(null);

  const pillsRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const links = useRef<Record<string, HTMLAnchorElement | null>>({});

  // Scroll-spy + reading progress. Sections that don't exist on the current
  // page are skipped, so on /blog only the progress bar does anything.
  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(
      (el): el is HTMLElement => el !== null,
    );
    let queued = false;

    const update = () => {
      queued = false;
      let cur: string | null = null;
      for (const s of sections) {
        if (s.getBoundingClientRect().top <= window.innerHeight * 0.35) cur = s.id;
      }
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      if (sections.length && atBottom) cur = sections[sections.length - 1].id;
      setActive(cur);

      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(1, window.scrollY / max) : 0;
      if (barRef.current) barRef.current.style.transform = `scaleX(${p})`;
    };

    const onScroll = () => {
      if (!queued) {
        queued = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    document.fonts?.ready.then(update);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Slide the highlight pill under the active link.
  useEffect(() => {
    const place = () => {
      const el = active ? links.current[active] : null;
      const box = pillsRef.current;
      if (!el || !box) {
        setInd(null);
        return;
      }
      setInd((prev) =>
        prev && prev.x === el.offsetLeft && prev.w === el.offsetWidth
          ? prev
          : { x: el.offsetLeft, w: el.offsetWidth },
      );
      if (box.scrollWidth > box.clientWidth) {
        box.scrollTo({
          left: el.offsetLeft - box.clientWidth / 2 + el.offsetWidth / 2,
          behavior: "smooth",
        });
      }
    };
    place();
    window.addEventListener("resize", place);
    document.fonts?.ready.then(place);
    return () => window.removeEventListener("resize", place);
  }, [active]);

  const swapTheme = () => {
    const root = document.documentElement;
    const next = root.dataset.theme === "dark" ? "paper" : "dark";
    root.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* private mode: the choice just won't persist */
    }
  };

  return (
    <nav
      aria-label="Sections"
      className="sticky top-0 z-50 flex items-center gap-2 border-b border-line bg-panel/88 px-4 py-3 backdrop-blur-md"
    >
      <a
        href="/"
        className="mr-1.5 hidden  text-[25px] italic leading-none tracking-[-0.02em] transition-transform duration-[350ms] ease-[cubic-bezier(.3,1.5,.5,1)] hover:-rotate-[4deg] hover:scale-[1.06] sm:inline-block"
      >
        Sujal
      </a>

      <div
        ref={pillsRef}
        className="relative flex max-w-max min-w-0 flex-1 gap-0.5 overflow-x-auto rounded-full border border-line p-[3px] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden max-sm:[mask-image:linear-gradient(90deg,transparent,#000_10px,#000_calc(100%_-_10px),transparent)]"
      >
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-[3px] left-0 rounded-full bg-acc transition-[transform,width,opacity] duration-500 ease-[cubic-bezier(.3,1.25,.5,1)] motion-reduce:transition-none"
          style={{
            width: ind?.w ?? 0,
            transform: `translateX(${ind?.x ?? 0}px)`,
            opacity: ind ? 1 : 0,
          }}
        />
        {LINKS.map(({ id, label }) => (
          <a
            key={id}
            href={`/#${id}`}
            ref={(el) => {
              links.current[id] = el;
            }}
            aria-current={active === id ? "true" : undefined}
            className="relative z-10 flex-none rounded-full px-3.5 py-[5px] text-sm leading-normal font-medium transition-colors duration-200 aria-[current=true]:text-panel [&:not([aria-current])]:hover:bg-band"
          >
            {label}
          </a>
        ))}
      </div>

      <button
        type="button"
        onClick={swapTheme}
        aria-label="Swap colours"
        title="Swap colours"
        className="theme-swap"
      />

      {/* Reading progress */}
      <div
        ref={barRef}
        aria-hidden="true"
        className="absolute inset-x-0 -bottom-px h-0.5 origin-left scale-x-0 bg-acc"
      />
    </nav>
  );
};