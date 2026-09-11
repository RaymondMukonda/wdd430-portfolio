export default async function SchoolProjectsPage() {
  // Fetch only school projects from your API
  const res = await fetch("http://localhost:3000/api/projects?type=school", { cache: "no-store" });
  const projects = await res.json();

  return (
    <div>
      <h1>School Projects</h1>
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
