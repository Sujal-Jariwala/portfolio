import { useEffect, useRef, useState } from "react";
import { Gear } from "./Stickers";

type Item = { name: string; note: string };
type Group = { title: string; items: Item[] };

const GROUPS: Group[] = [
    {
        title: "Languages",
        items: [
            { name: "TypeScript", note: "Type-safe front end" },
            { name: "Go", note: "API server" },
            { name: "Rust", note: "Storage engine" },
        ],
    },
    {
        title: "Front end",
        items: [
            { name: "React", note: "Editor" },
            { name: "Astro", note: "Marketing site" },
            { name: "Tailwind CSS", note: "Styling" },
        ],
    },
    {
        title: "Back end",
        items: [
            { name: "LaTeX", note: "PDF rendering" },
            { name: "ClamAV", note: "Upload scanning" },
            { name: "Cloudflare R2", note: "File storage" },
        ],
    },
    {
        title: "Hosting",
        items: [{ name: "Caddy", note: "TLS and proxy" }],
    },
];

const TOTAL = GROUPS.reduce((n, g) => n + g.items.length, 0);

const dotted = "border-b-[1.5px] border-dotted border-[rgba(2,31,148,0.5)]";
const dashed = "border-0 border-t-[1.5px] border-dashed border-[rgba(2,31,148,0.4)]";

export default function Stack() {
    const receiptRef = useRef<HTMLDivElement>(null);
    const [on, setOn] = useState(false);

    useEffect(() => {
        const el = receiptRef.current;
        if (!el) return;
        if (!("IntersectionObserver" in window)) {
            setOn(true);
            return;
        }
        const io = new IntersectionObserver(
            (entries) => {
                if (entries.some((e) => e.isIntersecting)) {
                    setOn(true);
                    io.disconnect();
                }
            },
            { threshold: 0.25 },
        );
        io.observe(el);
        return () => io.disconnect();
    }, []);

    return (
        <section id="stack" data-label="Stack" className="relative scroll-mt-16">
            <div className="hatch" aria-hidden="true" />

            <div className="flex min-h-16 items-center justify-between gap-3 border-b border-line bg-band px-[18px] py-2 sm:px-6">
                <h2 className="m-0  text-[32px] leading-none font-normal tracking-[-0.025em] italic">
                    Stack
                </h2>
                <Gear className="-my-2.5" style={{ "--w": "62px", "--r": "9deg" }} />
            </div>

            <div className="flex justify-center p-[18px] sm:p-6">
                <div ref={receiptRef} data-on={on} className="receipt mt-1.5 w-full max-w-[380px]">
                    <div className="receipt-paper px-[26px] pt-[30px] pb-[34px]">
                        <h3 className="m-0 text-center  text-[36px] leading-none font-normal tracking-[-0.02em] italic">
                            Built with
                        </h3>
                        <p className="mt-2 mb-4 text-center text-[13px] opacity-75">
                            Order for Resumetop and an LSM engine
                        </p>
                        <hr className={dashed} />

                        {GROUPS.map((g) => (
                            <div key={g.title}>
                                <h4 className="mt-4 mb-1 text-[13px] font-bold">{g.title}</h4>
                                {g.items.map((it) => (
                                    <div key={it.name} className="flex items-baseline gap-2 py-0.5 text-[15px]">
                                        <b className="font-medium">{it.name}</b>
                                        <span
                                            aria-hidden="true"
                                            className={`min-w-3.5 flex-1 -translate-y-[3px] ${dotted}`}
                                        />
                                        <span className="text-[13.5px] opacity-75">{it.note}</span>
                                    </div>
                                ))}
                            </div>
                        ))}

                        <hr className={`mt-4 ${dashed}`} />
                        <div className="mt-2.5 flex items-baseline gap-2 py-0.5 text-[15px] font-bold">
                            <b>Total</b>
                            <span aria-hidden="true" className={`min-w-3.5 flex-1 -translate-y-[3px] ${dotted}`} />
                            <span>{TOTAL} tools</span>
                        </div>

                        <div className="mt-[18px] flex items-center justify-between gap-3">
                            <p className="m-0 -rotate-3 font-hand text-[26px] leading-none">
                                thank you, come again
                            </p>
                            <div className="grid size-[86px] flex-none -rotate-[14deg] place-items-center rounded-full border-[3px] border-double border-[#021f94]  text-[20px] leading-none italic opacity-90">
                                Shipped
                            </div>
                        </div>

                        <div className="barcode mt-[18px]" aria-hidden="true" />
                    </div>
                </div>
            </div>
        </section>
    );
}