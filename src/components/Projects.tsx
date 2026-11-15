import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { Section, SectionBody } from "./Section";
import { Tag } from "./Tag";
import { Clipboard, Folder, Layers } from "./Stickers";

type Project = {
  name: string;
  tagline: string;
  blurb: string;
  /** Live projects link out; in-progress ones show `tag` instead. */
  href?: string;
  tag?: string;
};

type Group = { label: string; icon: ReactNode; projects: Project[] };

const groups: Group[] = [
  {
    label: "Live",
    icon: <Folder style={{ "--w": "48px", "--r": "-6deg" }} />,
    projects: [
      {
        name: "Resumetop",
        tagline: "AI-powered resume builder",
        blurb:
          "Rich-text editor, Go backend, PDFs rendered through LaTeX, and uploads scanned with ClamAV before they reach storage.",
        href: "https://resumetop.net",
      },
    ],
  },
  {
    label: "In progress",
    icon: <Layers style={{ "--w": "48px", "--r": "5deg" }} />,
    projects: [
      {
        name: "LSM engine",
        tagline: "Key-value storage in Rust",
        blurb:
          "The first version is a write-ahead log crate. Group commit and atomic multi-key writes are next.",
        tag: "wip",
      },
    ],
  },
];

const rowClass = "group relative block rounded-xl px-3.5 py-[13px] transition-colors duration-200";

const Row = ({ p }: { p: Project }) => {
  const inner = (
    <>
      <div className="flex items-baseline gap-3 max-sm:flex-wrap max-sm:gap-x-2.5 max-sm:gap-y-0.5">
        <b className="font-bold">{p.name}</b>
        <span className="text-mute">{p.tagline}</span>
        {p.href ? (
          <ArrowUpRight
            aria-hidden="true"
            strokeWidth={1.6}
            className="ml-auto size-3.5 flex-none opacity-55 transition duration-250 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
          />
        ) : (
          p.tag && <Tag className="ml-auto">{p.tag}</Tag>
        )}
      </div>
      <p className="mt-1 max-w-[56ch] text-[14.5px] text-mute">{p.blurb}</p>
    </>
  );

  return p.href ? (
    <a
      href={p.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${rowClass} hover:bg-band`}
    >
      {inner}
    </a>
  ) : (
    <div className={rowClass}>{inner}</div>
  );
};

export const Projects = () => (
  <Section
    id="projects"
    title="Projects"
    icon={<Clipboard className="-my-2.5" style={{ "--w": "62px", "--r": "-6deg" }} />}
  >
    <SectionBody className="flex flex-col gap-[26px]">
      {groups.map((g) => (
        <div key={g.label} className="flex flex-col">
          <div className="mb-2 flex items-center gap-3">
            {g.icon}
            <b className="rounded-lg bg-band px-3 py-[3px]  text-[22px] font-normal italic leading-[1.2]">
              {g.label}
            </b>
          </div>
          {g.projects.map((p) => (
            <Row key={p.name} p={p} />
          ))}
        </div>
      ))}
    </SectionBody>
  </Section>
);