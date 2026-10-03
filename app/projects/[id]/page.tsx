import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getProjectById } from '@/lib/projects-db';

type ProjectPageProps = {
  params: Promise<{ id: string }>;
};

function findProject(id: string) {
  return /^\d+$/.test(id) ? getProjectById(Number(id)) : null;
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { id } = await params;
  const project = findProject(id);

  if (!project) {
    return {
      title: 'Project Not Found',
      description: 'The requested portfolio project could not be found.',
    };
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      type: 'article',
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: ProjectPageProps) {
  const { id } = await params;
  const project = findProject(id);

  if (!project) notFound();

  return (
    <article>
      <p>{project.type === 'opensource' ? 'Open source project' : 'School project'}</p>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <h2>Technologies</h2>
      <ul>
        {project.technologies.map((technology) => (
          <li key={technology}>{technology}</li>
        ))}
      </ul>
      {project.link && (
        <p>
          <a href={project.link} target="_blank" rel="noreferrer">
            View project
          </a>
        </p>
      )}
      <Link href="/projects">Back to projects</Link>
    </article>
  );
}