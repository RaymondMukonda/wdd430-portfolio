'use client';

import { createProject } from '@/lib/actions';

export default function NewProjectPage() {
  return (
    <form action={createProject}>
      <h1>Create New Project</h1>
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
      <button type="submit">Create</button>
    </form>
  );
}
