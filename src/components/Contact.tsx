import { useRef, useState } from "react";
import { ArrowUpRight, Copy, Mail } from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { Postcard } from "./Stickers";

const EMAIL = "thisisjariwalasujal@gmail.com";

const SOCIALS = [
  {
    name: "GitHub",
    Icon: FiGithub,
    handle: "@Sujal-Jariwala",
    href: "https://github.com/Sujal-Jariwala",
  },
  {
    name: "LinkedIn",
    Icon: FiLinkedin,
    handle: "in/sujal-jariwala-b9b814267",
    href: "https://www.linkedin.com/in/sujal-jariwala-b9b814267/",
  },
  { name: "Email", Icon: Mail, handle: EMAIL, href: `mailto:${EMAIL}`, copy: true },
];

export const Contact = () => {
  const emailRef = useRef<HTMLSpanElement>(null);
  const [copyLabel, setCopyLabel] = useState<string | null>(null);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopyLabel("Copied");
    } catch {
      const el = emailRef.current;
      if (el) {
        const range = document.createRange();
        range.selectNodeContents(el);
        const sel = getSelection();
        sel?.removeAllRanges();
        sel?.addRange(range);
      }
      setCopyLabel("Selected");
    }
    setTimeout(() => setCopyLabel(null), 1800);
  }

  return (
    <section id="contact" data-label="Contact" className="relative scroll-mt-16">
      <div className="hatch" aria-hidden="true" />

      <div className="flex min-h-16 items-center justify-between gap-3 border-b border-line bg-band px-[18px] py-2 sm:px-6">
        <h2 className="m-0  text-[32px] leading-none font-normal tracking-[-0.025em] italic">
          Contact
        </h2>
        <Postcard className="-my-2.5" style={{ "--w": "62px", "--r": "8deg" }} />
      </div>

      <div className="overflow-hidden">
        <div className="-mb-px grid grid-cols-1 sm:grid-cols-2">
          {SOCIALS.map((s, i) => {
            const wide = SOCIALS.length % 2 === 1 && i === SOCIALS.length - 1;
            const rightBorder = i % 2 === 0 && !wide;
            return (
              <div
                key={s.name}
                className={`group relative flex items-center gap-3.5 border-b border-line px-5 py-4 transition-colors hover:bg-band ${wide ? "sm:col-span-2" : ""
                  } ${rightBorder ? "sm:border-r" : ""}`}
              >
                <span className="grid size-[38px] flex-none place-items-center rounded-[10px] border border-line transition-colors group-hover:border-acc group-hover:bg-acc group-hover:text-panel">
                  <s.Icon size={18} aria-hidden="true" />
                </span>

                <span className="min-w-0">
                  <a
                    href={s.href}
                    target={s.copy ? undefined : "_blank"}
                    rel={s.copy ? undefined : "noopener noreferrer"}
                    className="font-medium no-underline after:absolute after:inset-0 after:content-['']"
                  >
                    {s.name}
                  </a>
                  <span
                    ref={s.copy ? emailRef : undefined}
                    className="block truncate text-[13.5px] text-mute"
                  >
                    {s.handle}
                  </span>
                </span>

                {s.copy ? (
                  <button
                    type="button"
                    aria-label="Copy email"
                    onClick={copyEmail}
                    className="relative z-[2] ml-auto grid h-[30px] min-w-[30px] flex-none cursor-pointer place-items-center rounded-lg border border-line bg-transparent px-2 text-[12.5px] leading-none font-medium text-inherit hover:bg-band"
                  >
                    {copyLabel ?? <Copy size={15} aria-hidden="true" />}
                  </button>
                ) : (
                  <ArrowUpRight
                    size={14}
                    aria-hidden="true"
                    className="ml-auto flex-none opacity-[.55] transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};