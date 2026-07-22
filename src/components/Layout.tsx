import type { ReactNode } from "react";
import Navbar from "./Navbar";

interface LayoutProps {
  children: ReactNode;
  left: string;
  right: string;
}

export default function Layout({ children, left, right }: LayoutProps) {
  return (
    <div className="no-scroll-shell w-full flex flex-col bg-void relative">
      <Navbar />
      <main className="relative flex-1 min-h-0 overflow-hidden flex flex-col">
        {children}
      </main>
      <footer className="hidden md:flex items-center justify-between px-10 py-4 border-t border-line shrink-0">
        <span className="font-mono text-[10px] tracking-widest text-mute uppercase">
          {left}
        </span>
        <span className="font-mono text-[10px] tracking-widest text-mute uppercase">
          {right}
        </span>
      </footer>
    </div>
  );
}