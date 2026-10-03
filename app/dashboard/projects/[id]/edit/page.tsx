'use client';

import { updateProject } from '@/lib/actions';

export default function EditProjectPage({ params }: { params: { id: string } }) {
  return (
    <form action={(formData) => updateProject(params.id, formData)}>
      <h1>Edit Project</h1>
      <div>
        <label htmlFor="title">Title</label>
        <input id="title" name="title" required />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <textarea id="description" name="description" required />
      </div>
      <div>
        <label htmlFor="imageUrl">Image URL</label>
        <input id="imageUrl" name="imageUrl" />
      </div>
      <button type="submit">Update</button>
    </form>
  );
}
