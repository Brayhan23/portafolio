"use client";

import { useEffect, useState } from "react";

// Header fijo que gana borde inferior al hacer scroll.
export function HeaderShell({ children }: { children: React.ReactNode }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`sticky top-0 z-40 border-b bg-bg transition-colors ${
        scrolled ? "border-line" : "border-transparent"
      }`}
    >
      {children}
    </header>
  );
}
