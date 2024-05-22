import { NavLink } from "@/types/NavLink";
import Link from "next/link";

export default function NavLinks({ links }: { links: NavLink[] }) {
  return (
    <ul id="nav-link" className="flex justify-around min-w-fit">
      {links.map((link) => (
        <li className="mx-4">
          <Link
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            href={link.href}
          >
            {link.text}
          </Link>
        </li>
      ))}
    </ul>
  );
}
