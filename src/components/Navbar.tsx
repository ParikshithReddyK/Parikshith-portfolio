import { NavLink } from "react-router-dom";
import { profile } from "../data/content";

interface NavItem {
  to: string;
  label: string;
}

  const links: NavItem[] = [
  { to: "/about", label: "About" },
  { to: "/skills", label: "Skills" },
  { to: "/experience", label: "Experience" },
  { to: "/projects", label: "Projects" },
  { to: "/certifications", label: "Certs" },
  { to: "/contact", label: "Contact" },
];


export default function Navbar() {
  return (
    <header className="flex items-center justify-between px-6 md:px-10 py-5 border-b border-line shrink-0">
      <NavLink to="/" className="flex items-center gap-2">
        <span className="h-6 w-6 rounded-full border border-ember flex items-center justify-center">
          <span className="h-1.5 w-1.5 rounded-full bg-ember" />
        </span>
        <span className="font-mono text-sm tracking-widest text-bone uppercase">
          {profile.name}
        </span>
      </NavLink>

      <nav className="hidden lg:flex items-center gap-5">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }: { isActive: boolean }) =>
              `font-mono text-xs tracking-widest uppercase transition-colors ${
                isActive ? "text-ember" : "text-mute hover:text-bone"
              }`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>

      <a
        href={profile.resumeUrl}
        target="_blank"
        rel="noreferrer"
        className="font-mono text-xs tracking-widest uppercase border border-line rounded px-3 py-2 text-bone hover:border-ember hover:text-ember transition-colors"
      >
        Resume →
      </a>
    </header>
  );
}