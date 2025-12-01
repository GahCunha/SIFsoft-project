import { Logo } from "./logo";

export function Navbar() {
  return (
    <nav className="flex justify-between">
      <Logo />
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Menu</li>
      </ul>
    </nav>
  );
}
