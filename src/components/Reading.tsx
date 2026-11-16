import { useState, type CSSProperties, type ReactNode } from "react";
import { Books } from "./Stickers";

type Book = {
    id: string;
    title: string;
    by: string;
    h: number;
    sw: number;
    cw: number;
    bg: string;
    fg: string;
    spine: ReactNode;
    cover: ReactNode;
    summary: string[];
};

const BOOKS: Book[] = [
    {
        id: "db",
        title: "Database Internals",
        by: "Alex Petrov",
        h: 300,
        sw: 54,
        cw: 206,
        bg: "#2A6F97",
        fg: "#F4F1E8",
        spine: (
            <>
                <span className="text-[8.5px] font-bold">O’Reilly</span>
                <span className="vertical-text min-h-0 flex-1 text-center font-sans text-[19px] leading-[1.1] font-bold">
                    Database Internals
                </span>
                <span className="vertical-text text-[11px] leading-none font-medium">Petrov</span>
            </>
        ),
        cover: (
            <>
                <span className="text-[26px] leading-[1.02] font-bold tracking-[-0.02em]">
                    Database Internals
                </span>
                <span className="mt-2 text-[11.5px] leading-[1.3]">
                    A Deep Dive into How Distributed Data Systems Work
                </span>
                <span className="grid min-h-0 flex-1 place-items-center py-1.5">
                    <svg
                        className="h-auto max-h-full w-full"
                        viewBox="0 0 180 110"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                    >
                        <path d="M14 58Q58 14 118 44Q140 54 164 34L160 58L166 84Q142 66 118 72Q58 100 14 58Z" />
                        <circle cx="36" cy="52" r="3.2" />
                        <path d="M44 50Q60 62 52 74M60 46Q80 62 70 82M80 44Q100 58 92 74M100 46Q112 56 108 68" />
                        <path d="M70 30Q82 14 96 26M96 26Q106 20 112 34" />
                        <path d="M118 72Q112 88 100 92Q104 84 104 78" />
                    </svg>
                </span>
                <span className="text-[13px] leading-[1.2] font-bold">Alex Petrov</span>
                <span className="mt-0.5 text-[10px] opacity-80">O’Reilly</span>
            </>
        ),
        summary: [
            "A tour of what a database does after you hit save, in two halves. The first covers a single machine: how B-Trees lay data out on disk, how pages are cached and rewritten, how LSM trees trade read cost for fast writes, and how transactions and write-ahead logs keep data safe through a crash.",
            "The second half moves to many machines: detecting failures, electing a leader, replicating data, choosing a consistency level, and agreeing on a value with consensus protocols. The first half is the part that matters most for building a storage engine.",
        ],
    },
    {
        id: "ms",
        title: "The Myth of Sisyphus",
        by: "Albert Camus",
        h: 262,
        sw: 40,
        cw: 176,
        bg: "#E9D9A6",
        fg: "#1B1B1B",
        spine: (
            <>
                <span className="text-[8.5px] font-bold">Vintage</span>
                <span className="vertical-text min-h-0 flex-1 text-center  text-[16px] leading-[1.1] font-normal italic">
                    The Myth of Sisyphus
                </span>
                <span className="vertical-text text-[11px] leading-none font-medium">Camus</span>
            </>
        ),
        cover: (
            <>
                <span className="mb-2.5 text-[10px] opacity-80">Vintage International</span>
                <span className=" text-[29px] leading-[1.02] font-normal tracking-[-0.02em] italic">
                    The Myth of Sisyphus
                </span>
                <span className="mt-2 text-[11.5px] leading-[1.3]">And Other Essays</span>
                <span className="grid min-h-0 flex-1 place-items-center py-1.5">
                    <svg
                        className="h-auto max-h-full w-full"
                        viewBox="0 0 180 110"
                        fill="none"
                        stroke="#1B1B1B"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                    >
                        <path d="M4 98L176 36" />
                        <circle cx="118" cy="41" r="16" fill="#1B1B1B" />
                        <circle cx="84" cy="38" r="4" fill="#1B1B1B" />
                        <path d="M84 42L90 56M90 56L82 68M90 56L98 64M86 46L103 44" />
                    </svg>
                </span>
                <span className="text-[13px] leading-[1.2] font-bold">Albert Camus</span>
                <span className="mt-0.5 text-[10px] opacity-80">Translated by Justin O’Brien</span>
            </>
        ),
        summary: [
            "Camus starts with one blunt question: if the world offers no built-in meaning, is life still worth living? He calls the gap between our hunger for meaning and the universe’s silence “the absurd”.",
            "He rejects suicide, and he also rejects escapes like religious leaps of faith, because both refuse to face the gap. His answer is to live with it knowingly, with revolt, freedom and passion. The book ends on Sisyphus endlessly rolling his boulder uphill, and Camus argues that the struggle itself can be enough to fill a life.",
        ],
    },
    {
        id: "fr",
        title: "Man’s Search for Meaning",
        by: "Viktor E. Frankl",
        h: 276,
        sw: 46,
        cw: 186,
        bg: "#F3ECDC",
        fg: "#1B1B1B",
        spine: (
            <>
                <span className="size-[11px] rounded-full bg-[#E9B23B]" />
                <span className="vertical-text min-h-0 flex-1 text-center font-sans text-[16px] leading-[1.05] font-bold">
                    Man’s Search for Meaning
                </span>
                <span className="vertical-text text-[11px] leading-none font-medium">Frankl</span>
            </>
        ),
        cover: (
            <>
                <span className="text-[31px] leading-[0.98] font-bold tracking-[-0.035em]">
                    Man’s Search for Meaning
                </span>
                <span className="grid min-h-0 flex-1 place-items-center py-1.5">
                    <svg
                        className="h-auto max-h-full w-full"
                        viewBox="0 0 180 90"
                        fill="none"
                        stroke="#1B1B1B"
                        strokeWidth="2"
                        strokeLinecap="round"
                        aria-hidden="true"
                    >
                        <path d="M50 80A40 40 0 0 1 130 80Z" fill="#E9B23B" stroke="none" />
                        <path d="M0 80H180" strokeWidth="3" />
                        <path d="M90 28V16M52 40L44 32M128 40L136 32M32 62L20 58M148 62L160 58" />
                    </svg>
                </span>
                <span className="mb-2 text-[11.5px] leading-[1.3] italic">
                    The classic tribute to hope from the Holocaust
                </span>
                <span className="text-[13px] leading-[1.2] font-bold">Viktor E. Frankl</span>
                <span className="mt-0.5 text-[10px] opacity-80">Beacon Press</span>
            </>
        ),
        summary: [
            "Viktor Frankl, a psychiatrist, survived several Nazi camps, including Auschwitz. The first part is his account of daily life there and of what separated the prisoners who held on from those who gave up.",
            "The second part introduces logotherapy, his idea that the deepest human drive is to find meaning. He sees three sources: meaningful work, love for another person, and the stance you take toward suffering you cannot avoid. Even when circumstances are taken away, he argues, how you respond is still yours to choose.",
        ],
    },
    {
        id: "wn",
        title: "White Nights",
        by: "Fyodor Dostoevsky",
        h: 284,
        sw: 44,
        cw: 190,
        bg: "#1F2A44",
        fg: "#EFE7D6",
        spine: (
            <>
                <span className="size-[11px] rounded-full bg-[#F2E3B3]" />
                <span className="vertical-text min-h-0 flex-1 text-center text-[18px] leading-[1.1] font-semibold">
                    White Nights
                </span>
                <span className="vertical-text text-[11px] leading-none">Dostoevsky</span>
            </>
        ),
        cover: (
            <>
                <span className="text-[30px] leading-[1.02] font-semibold tracking-[-0.03em]">
                    White Nights
                </span>
                <span className="mt-2 text-[11.5px] leading-[1.3]">From the Memoirs of a Dreamer</span>
                <span className="grid min-h-0 flex-1 place-items-center py-1.5">
                    <svg
                        className="h-auto max-h-full w-full"
                        viewBox="0 0 180 110"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                    >
                        <circle cx="132" cy="28" r="15" fill="#F2E3B3" stroke="none" />
                        <path d="M6 74Q90 30 174 74" />
                        <path d="M6 74H174" />
                        <path d="M30 62V74M54 53V74M78 48V74M102 48V74M126 53V74M150 62V74" />
                        <path d="M10 88Q22 84 34 88T58 88T82 88T106 88T130 88T154 88T170 88" />
                        <path d="M26 98Q38 94 50 98T74 98T98 98T122 98T146 98" />
                    </svg>
                </span>
                <span className="text-[13px] leading-[1.2] font-semibold">Fyodor Dostoevsky</span>
                <span className="mt-0.5 text-[10px] opacity-80">St Petersburg, 1848</span>
            </>
        ),
        summary: [
            "A short novel set over four white nights in St Petersburg. A lonely young man who lives mostly in his daydreams meets Nastenka, a girl waiting by the canal for the man she loves, who promised to return to her after a year. Over the nights they talk, confide in each other, and he begins to fall for her.",
            "It is a quiet book about loneliness, and about dreaming your life instead of living it. Dostoevsky is gentle with his narrator, and the ending is bittersweet: even a few real hours of connection can be worth more than years of imagined ones.",
        ],
    },
];

export default function Reading() {
    const [active, setActive] = useState(0);
    const current = BOOKS[active];

    return (
        <section id="reading" data-label="Reading" className="relative scroll-mt-16">
            <div className="hatch" aria-hidden="true" />

            <div className="flex min-h-16 items-center justify-between gap-3 border-b border-line bg-band px-[18px] py-2 sm:px-6">
                <h2 className="m-0  text-[32px] leading-none font-normal tracking-[-0.025em] italic">
                    Reading
                </h2>
                <Books className="-my-2.5" style={{ "--w": "62px", "--r": "-7deg" }} />
            </div>

            <div className="p-[18px] sm:p-6">
                <p className="m-0 mb-4 max-w-[60ch] text-mute">Some books from my reading catalogue.</p>

                <div className="shelf-board">
                    <div
                        role="group"
                        aria-label="Books"
                        className="flex items-end justify-center gap-1.5 px-0 pt-[26px] sm:gap-2 sm:px-2"
                    >
                        {BOOKS.map((b, i) => (
                            <button
                                key={b.id}
                                type="button"
                                className="book"
                                aria-expanded={i === active}
                                aria-label={`${b.title} by ${b.by}`}
                                onClick={() => setActive(i)}
                                style={
                                    {
                                        "--h": `${b.h}px`,
                                        "--sw": `${b.sw}px`,
                                        "--cw": `${b.cw}px`,
                                        background: b.bg,
                                        color: b.fg,
                                    } as CSSProperties
                                }
                            >
                                <span className="book-face book-spine flex flex-col items-center justify-between gap-2 py-3">
                                    {b.spine}
                                </span>
                                <span className="book-face book-cover flex flex-col px-4 pt-[18px] pb-4 text-left">
                                    {b.cover}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>

                <p className="mt-[18px] mb-0 min-h-[1.6em] max-w-none text-center text-[15px] text-mute">
                    {current.title} by {current.by}
                </p>

                <div className="flex justify-center">
                    {BOOKS.map((b, i) => (
                        <details key={b.id} className="summary-box mt-3.5 w-full max-w-[60ch]" hidden={i !== active}>
                            <summary>Read the summary</summary>
                            <div className="flex flex-col gap-[0.8em] px-4 pb-4 text-[15px] text-mute">
                                {b.summary.map((p) => (
                                    <p key={p} className="m-0">
                                        {p}
                                    </p>
                                ))}
                            </div>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
}