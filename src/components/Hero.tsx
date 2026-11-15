import { Arrow, Crab, Gopher, Mug, Socrates } from "./Stickers";

export const Hero = () => (
  <header className="flex flex-col px-[18px] pt-4 pb-8 sm:px-6 sm:pt-5 sm:pb-10">
    {/* Sticker cluster (decorative) */}
    <div
      aria-hidden="true"
      className="relative mb-1.5 h-[clamp(240px,42vw,330px)]"
    >
      <div className="absolute -inset-x-[6%] -inset-y-[8%] bg-[radial-gradient(ellipse_58%_52%_at_50%_52%,var(--band),transparent_72%)]" />
      <Gopher
        className="sticker-pop absolute"
        style={{ "--r": "-8deg", "--w": "clamp(78px,19vw,150px)", "--d": "0s", left: "2%", top: "4%" }}
      />
      <Socrates
        className="sticker-pop absolute"
        style={{ "--r": "3deg", "--w": "clamp(92px,23vw,178px)", "--d": "0.1s", left: "29%", top: "20%" }}
      />
      <Crab
        className="sticker-pop absolute"
        style={{ "--r": "7deg", "--w": "clamp(72px,18vw,140px)", "--d": "0.2s", left: "63%", top: "2%" }}
      />
      <Arrow
        className="sticker-pop absolute"
        style={{ "--r": "-12deg", "--w": "clamp(70px,17vw,132px)", "--d": "0.3s", left: "79%", top: "46%" }}
      />
      <Mug
        className="sticker-pop absolute"
        style={{ "--r": "6deg", "--w": "clamp(64px,14vw,108px)", "--d": "0.4s", left: "6%", top: "62%" }}
      />
    </div>

    {/* <p className="mb-2 flex items-center gap-3 text-[15px] text-mute">
      <b className=" text-[34px] font-normal italic leading-none tracking-[-0.02em] text-ink">
        Sujal
      </b>
      <span className="pulse-dot" aria-hidden="true" />
      <span>Building Resumetop</span>
    </p> */}

    <h1 className="mb-2.5  text-[clamp(32px,5.4vw,50px)] font-normal italic leading-[1.08] tracking-[-0.025em]">
      Hey there, I’m Sujal, a software engineer.
    </h1>

    <p className="max-w-[56ch] text-mute">
      From hybrid frontends to Go APIs to an LSM storage engine in Rust, I get
      my hands dirty with all of it.
    </p>
  </header>
);