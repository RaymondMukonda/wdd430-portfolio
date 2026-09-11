export default async function OpenSourceProjectsPage() {
  // Fetch only open source projects from your API
  const res = await fetch("http://localhost:3000/api/projects?type=opensource", { cache: "no-store" });
  const projects = await res.json();

  return (
    <div>
      <h1>Open Source Projects</h1>
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
