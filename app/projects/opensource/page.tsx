import { getProjects } from '@/lib/projects-db';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Open Source Projects',
  description: 'Open-source contributions and projects by Raymond Mukonda.',
};

export default function OpenSourceProjectsPage() {
  const projects = getProjects('opensource');

  return (
    <div>
      <h1>Open Source Projects</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <strong>{project.title}</strong> – {project.description}
          </li>
        ))}
      </ul>
    </div>
  );
}
