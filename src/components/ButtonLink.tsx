import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  external?: boolean;
  download?: boolean;
  className?: string;
};

const base =
  "inline-flex items-center justify-center rounded-[4px] border px-5 py-2.5 text-sm font-medium transition-colors";
const variants = {
  primary:
    "border-accent bg-accent text-bg hover:bg-transparent hover:text-accent",
  secondary: "border-line text-ink hover:border-accent hover:text-accent",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  external,
  download,
  className = "",
}: Props) {
  const clases = `${base} ${variants[variant]} ${className}`;
  if (external) {
    return (
      <a
        href={href}
        className={clases}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }
  if (download || href.startsWith("mailto:")) {
    return (
      <a href={href} className={clases} download={download || undefined}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={clases}>
      {children}
    </Link>
  );
}

export function TextLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-accent underline decoration-line underline-offset-4 transition-colors hover:decoration-accent"
    >
      {children}
    </a>
  );
}
