import Link from "next/link";

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
          <li>
            <Link href="/projects/settings">Settings</Link>
          </li>
        </ul>
      </nav>
      <main className="p-6">{children}</main>
    </div>
  );
}
