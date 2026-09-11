import { NextResponse } from "next/server";
import { getProjects } from "@/lib/projects-db";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get("type");

  const data = getProjects(type);
  return NextResponse.json(data);
}
