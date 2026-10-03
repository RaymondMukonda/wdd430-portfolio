'use client';

import { useTransition } from 'react';
import { deleteProject } from '@/lib/actions';
import Link from 'next/link';

export function ProjectActions({ projectId }: { projectId: string }) {
  const [isPending, startTransition] = useTransition();

  return (
    <div style={{ display: 'flex', gap: '1rem' }}>
      {/* Edit button navigates to the edit form */}
      <Link href={`/dashboard/projects/${projectId}/edit`}>
        <button>Edit</button>
      </Link>

      {/* Delete button calls the server action */}
      <form
        action={async () => {
          startTransition(async () => {
            await deleteProject(projectId);
          });
        }}
      >
        <button type="submit" disabled={isPending}>
          {isPending ? 'Deleting...' : 'Delete'}
        </button>
      </form>
    </div>
  );
}
