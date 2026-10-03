// app/lib/actions.ts
'use server';

import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
import { auth } from '@/auth';
import { projects } from '@/lib/projects-db';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

// --------------------
// AUTHENTICATION
// --------------------
export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    formData.set('redirectTo', '/dashboard');
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid email or password.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error; // re-throw so Next.js handles redirects correctly
  }
}

// --------------------
// OWNER SESSION CHECK
// --------------------
async function requireOwnerSession() {
  const session = await auth();
  if (!session?.user) throw new Error('Not authenticated');
  return session;
}

// --------------------
// PROJECT ACTIONS (in-memory)
// --------------------
export async function createProject(formData: FormData) {
  await requireOwnerSession();

  projects.push({
    id: projects.length + 1,
    title: formData.get('title') as string,
    description: formData.get('description') as string,
    type: 'school', // default type for now
    technologies: [],
    link: formData.get('imageUrl') as string | undefined,
  });

  revalidatePath('/dashboard/projects');
  redirect('/dashboard/projects');
}

export async function updateProject(id: string, formData: FormData) {
  await requireOwnerSession();

  const projectIndex = projects.findIndex((p) => p.id === Number(id));
  if (projectIndex === -1) throw new Error('Project not found');

  projects[projectIndex] = {
    ...projects[projectIndex],
    title: formData.get('title') as string,
    description: formData.get('description') as string,
    link: formData.get('imageUrl') as string | undefined,
  };

  revalidatePath('/dashboard/projects');
  redirect('/dashboard/projects');
}

export async function deleteProject(id: string) {
  await requireOwnerSession();

  const projectIndex = projects.findIndex((p) => p.id === Number(id));
  if (projectIndex === -1) throw new Error('Project not found');

  projects.splice(projectIndex, 1);

  revalidatePath('/dashboard/projects');
}
