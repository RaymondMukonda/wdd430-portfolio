import { getProjects } from '@/lib/projects-db';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'School Projects',
  description: 'Coursework and academic software projects by Raymond Mukonda.',
};

export default function SchoolProjectsPage() {
  const projects = getProjects('school');

  return (
    <div>
      <h1>School Projects</h1>
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
