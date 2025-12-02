import { Logo } from "./logo";

export function Navbar() {
  const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
    {
      href: "#menu",
      label: "Menu",
      className:
        "text-amber h-fit rounded-full bg-white px-4 font-bold shadow-xl"
    }
  ];
  return (
    <nav className="bg-amber sticky top-0 z-50 flex h-20 items-center justify-between px-24 py-4 shadow-xl">
      <Logo />
      <ul className="flex gap-12">
        {links.map((link) => (
          <a href={link.href} className={link.className || "text-black"}>
            {link.label}
          </a>
        ))}
      </ul>
    </nav>
  );
}
