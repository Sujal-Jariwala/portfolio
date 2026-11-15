export const Footer = () => {
  return (
    <footer className="flex flex-col overflow-hidden text-center">
      <div className="flex flex-col items-center px-6 pt-12">
        <blockquote className="mb-3.5 max-w-[26ch]  text-[clamp(22px,3vw,28px)] leading-[1.25] font-normal tracking-[-0.015em] italic">
          The unexamined life is not worth living.
          <cite className="mt-1.5 block font-sans text-sm leading-[1.4] font-normal text-mute not-italic">
            Socrates
          </cite>
        </blockquote>
        <p className="m-0 text-[13.5px] text-mute">© 2026 Sujal</p>
      </div>
      <div className="hatch-fade mt-12" aria-hidden="true" />
    </footer>
  );
};