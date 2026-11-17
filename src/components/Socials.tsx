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

// One easing for everything: fast start, long soft landing, no overshoot.
const glide = "duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]";

// Dock-style magnify. The hovered sticker swells and straightens, and its two
// neighbours lean in a little. Only transforms, colours and borders animate,
// and they all ease together, so there is no hard switch anywhere.
export const Socials = () => (
    <nav aria-label="Socials" className="flex items-center gap-4 pt-2">
        <span className="text-[13.5px] text-mute">Find me on</span>
        <ul className="m-0 flex list-none gap-3 p-0">
            {LINKS.map(({ name, Icon, href, tilt }) => {
                const external = href.startsWith("http");
                return (
                    <li
                        key={name}
                        className={`group origin-bottom transition-transform ${glide} hover:scale-[1.3] has-[+li:hover]:scale-110 [li:hover+&]:scale-110`}
                    >
                        <a
                            href={href}
                            aria-label={name}
                            title={name}
                            target={external ? "_blank" : undefined}
                            rel={external ? "noopener noreferrer" : undefined}
                            className={`grid size-10 place-items-center rounded-full border border-line-strong bg-panel text-ink no-underline transition-[rotate,color,border-color] ${glide} group-hover:rotate-0 group-hover:border-acc group-hover:text-acc ${tilt}`}
                        >
                            <Icon size={17} aria-hidden="true" />
                        </a>
                    </li>
                );
            })}
        </ul>
    </nav>
);