import type { ReactNode } from "react";

export const Tag = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => (
  <span
    className={`inline-block rounded-[10px] border border-line-strong px-[11px] py-0.5 text-[13.5px] leading-normal ${className}`}
  >
    {children}
  </span>
);