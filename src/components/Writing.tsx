import { ArrowRight } from "lucide-react";
import { Scroll } from "./Stickers";

type Post = { title: string; url?: string };

const titleClass =
    "block truncate font-serif text-[clamp(21px,2.6vw,24px)] leading-[1.2] font-normal tracking-[-0.015em] italic";

export const Writings = ({ posts }: { posts: Post[] }) => {
    return (
        <section id="writings" data-label="Writings" className="relative scroll-mt-16">
            <div className="hatch" aria-hidden="true" />

            <div className="flex min-h-16 items-center justify-between gap-3 border-b border-line bg-band px-[18px] py-2 sm:px-6">
                <h2 className="m-0 font-serif text-[32px] leading-none font-normal tracking-[-0.025em] italic">
                    Writings
                </h2>
                <Scroll className="-my-2.5" style={{ "--w": "62px", "--r": "-5deg" }} />
            </div>

            <ul className="m-0 flex list-none flex-col p-[18px] sm:p-6">
                {posts.map((p) => (
                    <li key={p.title} className="border-t border-line px-1 py-[18px] first:border-t-0 first:pt-1">
                        {p.url ? (
                            <a
                                href={p.url}
                                title={p.title}
                                className={`${titleClass} no-underline hover:underline hover:decoration-1 hover:underline-offset-[5px]`}
                            >
                                {p.title}
                            </a>
                        ) : (
                            <span title={p.title} className={titleClass}>
                                {p.title}
                            </span>
                        )}
                    </li>
                ))}
            </ul>

            <div className="flex px-[18px] pb-[18px] sm:px-6 sm:pb-6">
                <a
                    href="/blog"
                    className="inline-flex items-center gap-1.5 rounded-full border border-line-strong px-4 py-1.5 text-[14px] no-underline transition-colors hover:bg-band"
                >
                    <span>See all writings</span>
                    <ArrowRight size={14} aria-hidden="true" />
                </a>
            </div>
        </section>
    );
};