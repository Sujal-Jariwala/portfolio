import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  title: string;
  /** A sticker, e.g. <BookIcon className="-my-2.5" style={{ "--w": "62px" }} /> */
  icon?: ReactNode;
  children: ReactNode;
};

// Hatch divider + titled band. The id must match a link in Navbar.
export const Section = ({ id, title, icon, children }: SectionProps) => (
  <section id={id} className="relative scroll-mt-16">
    <div className="hatch" aria-hidden="true" />
    <div className="flex min-h-16 items-center justify-between gap-3 border-b border-line bg-band px-[18px] py-2 sm:px-6">
      <h2 className=" text-[32px] font-normal italic leading-none tracking-[-0.025em]">
        {title}
      </h2>
      {icon}
    </div>
    {children}
  </section>
);

export const SectionBody = ({
  className = "",
  children,
}: {
  className?: string;
  children: ReactNode;
}) => <div className={`p-[18px] sm:p-6 ${className}`}>{children}</div>;