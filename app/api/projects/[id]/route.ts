import { NextResponse } from "next/server";
import { getProjectById } from "@/lib/projects-db";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = Number(params.id);

  // If id is not a number, return 400
  if (isNaN(id)) {
    return NextResponse.json(
      { error: "Invalid project id" },
      { status: 400 }
    );
  }

  // Try to find the project
  const project = getProjectById(id);

  // If not found, return 404
  if (!project) {
    return NextResponse.json(
      { error: "Project not found" },
      { status: 404 }
    );
  }

  // Otherwise return the project
  return NextResponse.json(project);
}
