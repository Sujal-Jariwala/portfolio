import { Mail } from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const LINKS = [
    {
        name: "GitHub",
        Icon: FiGithub,
        href: "https://github.com/Sujal-Jariwala",
        tilt: "-rotate-[4deg]",
    },
    {
        name: "LinkedIn",
        Icon: FiLinkedin,
        href: "https://www.linkedin.com/in/sujal-jariwala-b9b814267/",
        tilt: "rotate-[3deg]",
    },
    {
        name: "Email",
        Icon: Mail,
        href: "mailto:thisisjariwalasujal@gmail.com",
        tilt: "-rotate-[2deg]",
    },
    {
        name: "Instagram",
        Icon: FaInstagram,
        href: "https://www.instagram.com/thebitpenguin/?hl=en",
        tilt: "-rotate-[1deg]"
    }
];

const ease = "ease-[cubic-bezier(0.22,1,0.36,1)]";

// One wave period is 40 units, the svg is drawn two periods wide, and sliding it
// by exactly half its width loops forever with no seam.
const WAVE = "M0 5Q10 0 20 5T40 5T60 5T80 5V40H0Z";

// Each sticker is a little glass of water. On hover the water rises, tinted with
// the accent, and its surface keeps drifting: two waves at different speeds and
// opposite directions so it never looks like one repeating pattern.
// CSS only. The rising is a transition, the drifting is a looping keyframe.
const Water = ({ back = false }: { back?: boolean }) => (
    <span
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 translate-y-full text-acc transition-transform ${ease} ${back
                ? "z-0 opacity-30 duration-[1300ms] group-hover:translate-y-[34%]"
                : "z-0 opacity-45 duration-[1000ms] group-hover:translate-y-[46%]"
            }`}
    >
        <svg
            viewBox="0 0 80 40"
            preserveAspectRatio="none"
            className={`absolute top-0 left-0 h-full w-[200%] motion-reduce:animate-none ${back ? "animate-[drift-back_7s_linear_infinite]" : "animate-[drift_4.5s_linear_infinite]"
                }`}
        >
            <path d={WAVE} fill="currentColor" />
        </svg>
    </span>
);

export const Socials = () => (
    <nav aria-label="Socials" className="flex items-center gap-4 pt-2">
        <style>{`@keyframes drift{to{transform:translateX(-50%)}}@keyframes drift-back{from{transform:translateX(-50%)}to{transform:translateX(0)}}`}</style>
        <span className="text-[13.5px] text-mute">Find me on</span>
        <ul className="m-0 flex list-none gap-3 p-0">
            {LINKS.map(({ name, Icon, href, tilt }) => {
                const external = href.startsWith("http");
                return (
                    <li key={name} className="group">
                        <a
                            href={href}
                            aria-label={name}
                            title={name}
                            target={external ? "_blank" : undefined}
                            rel={external ? "noopener noreferrer" : undefined}
                            className={`relative grid size-10 place-items-center overflow-hidden rounded-full border border-line-strong bg-panel text-ink no-underline transition-[rotate,border-color] duration-700 ${ease} group-hover:rotate-0 group-hover:border-acc ${tilt}`}
                        >
                            <Water back />
                            <Water />
                            <Icon size={17} aria-hidden="true" className="relative z-10" />
                        </a>
                    </li>
                );
            })}
        </ul>
    </nav>
);