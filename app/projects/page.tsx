export default async function ProjectsPage() {
  // Fetch all projects from your API
  const res = await fetch("http://localhost:3000/api/projects", { cache: "no-store" });
  const projects = await res.json();

  return (
    <div>
      <h1>Projects Overview</h1>
      <ul>
        {projects.map((p: any) => (
          <li key={p.id}>
            <strong>{p.title}</strong> – {p.description}
          </li>
        ))}
      </ul>
    </div>
  );
}
