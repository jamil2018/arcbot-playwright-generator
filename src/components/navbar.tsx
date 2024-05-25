import Link from "next/link";
import { ModeToggle } from "./ui/theme-toggler";
import NavLinks from "./navlinks";

export default function Navbar() {
  return (
    <nav
      id="navbar"
      className="mt-4 py-2 flex justify-between items-center container mb-8"
    >
      <div id="nav-content" className="flex justify-between items-center gap-6">
        <div id="nav-logo">
          <Link href="/" className="font-bold text-xl">
            // arcbot
          </Link>
        </div>
        <div id="nav-link">
          <NavLinks
            links={[
              { href: "/steps", text: "Steps" },
              { href: "/templates", text: "Templates" },
              { href: "/tests", text: "Tests" },
              { href: "/locators", text: "Locators" },
            ]}
          />
        </div>
      </div>
      <ModeToggle />
    </nav>
  );
}
