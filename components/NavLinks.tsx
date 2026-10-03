"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";

export default function NavLinks({
  isAuthenticated,
}: {
  isAuthenticated: boolean;
}) {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <ul className="flex gap-6">
      {links.map((link) => {
        const isActive = pathname === link.href;
        return (
          <li key={link.href}>
            <Link
              href={link.href}
              aria-current={isActive ? "page" : undefined}
              className={
                isActive
                  ? "font-bold text-yellow-300 underline"
                  : "text-white hover:text-yellow-200"
              }
            >
              {link.label}
            </Link>
          </li>
        );
      })}

      {!isAuthenticated && (
        <li>
          <Link href="/login" className="text-white hover:text-yellow-200">
            Login
          </Link>
        </li>
      )}

      {isAuthenticated && (
        <>
          <li>
            <Link href="/dashboard" className="text-white hover:text-yellow-200">
              Dashboard
            </Link>
          </li>
          <li>
            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              className="text-white hover:text-yellow-200"
            >
              Logout
            </button>
          </li>
        </>
      )}
    </ul>
  );
}
