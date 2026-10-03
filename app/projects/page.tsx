import Link from 'next/link';
import { getProjects } from '@/lib/projects-db';

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <section>
      <h1>Projects Overview</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <Link href={`/projects/${project.id}`}>
              <strong>{project.title}</strong>
            </Link>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
