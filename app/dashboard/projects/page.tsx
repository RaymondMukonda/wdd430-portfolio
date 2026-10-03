import { getAllProjects } from '@/lib/data';
import { ProjectActions } from '@/components/project-actions';

export default async function DashboardProjectsPage() {
  const projects = await getAllProjects();

  return (
    <section>
      <h1>Manage Projects</h1>
      <ul>
        {projects.map((project: any) => (
          <li key={project.id}>
            <span>{project.title}</span>
            <ProjectActions projectId={project.id} />
          </li>
        ))}
      </ul>
    </section>
  );
}
