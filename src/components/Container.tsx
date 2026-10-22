import type { ElementType, ReactNode } from "react";

export function Container({
  as: Tag = "div",
  className = "",
  id,
  labelledBy,
  children,
}: {
  as?: ElementType;
  className?: string;
  id?: string;
  labelledBy?: string;
  children: ReactNode;
}) {
  return (
    <Tag id={id} aria-labelledby={labelledBy} className={`mx-auto w-full max-w-6xl px-5 md:px-8 ${className}`}>
      {children}
    </Tag>
  );
}
