import Link from "next/link";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Browse web development, school, and open-source projects by Raymond Mukonda.',
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <nav className="bg-gray-100 p-4 text-black">
        <ul className="flex gap-4">
          <li>
            <Link href="/projects">Projects Home</Link>
          </li>
        </ul>
      </nav>
      <main className="p-6">{children}</main>
    </div>
  );
}
