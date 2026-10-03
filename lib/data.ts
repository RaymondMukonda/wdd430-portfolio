// lib/data.ts
import { getProjects, getProjectById } from './projects-db';

// Re-export with names that match the rest of your app
export const getAllProjects = () => getProjects();
export const getProjectByIdWrapper = (id: number) => getProjectById(id);
