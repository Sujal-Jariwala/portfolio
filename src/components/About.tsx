import { BookIcon } from "./Stickers";
import { Socials } from "./Socials";

export const About = () => {
  return (
    <section id="about" data-label="About" className="relative scroll-mt-16">
      <div className="hatch" aria-hidden="true" />

      <div className="flex min-h-16 items-center justify-between gap-3 border-b border-line bg-band px-[18px] py-2 sm:px-6">
        <h2 className="m-0 text-[32px] leading-none font-semibold tracking-[-0.025em]">
          About
        </h2>
        <BookIcon className="-my-2.5" style={{ "--w": "62px", "--r": "6deg" }} />
      </div>

      <div className="flex flex-col gap-4 p-[18px] sm:p-6">
        <p className="m-0 max-w-[60ch] text-[clamp(24px,3.4vw,30px)] leading-[1.2] font-semibold tracking-[-0.02em] text-balance">
          I ship full-stack products and understand the layers underneath them.
        </p>
        <p className="m-0 max-w-[60ch] text-[17.5px] text-pretty">
          I build Resumetop, a live resume builder: React and TypeScript on the front, Go on the
          back, PDFs rendered through LaTeX, and every upload scanned before it reaches storage.
        </p>
        <p className="m-0 max-w-[60ch] text-[17.5px] text-pretty">
          Outside of it, I’m writing an LSM storage engine in Rust, starting with the write-ahead
          log. I keep a written record of the decisions I make, including what I chose not to build.
        </p>
        <Socials />
      </div>
    </section>
  );
};