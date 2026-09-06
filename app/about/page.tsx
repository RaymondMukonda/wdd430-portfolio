import SkillCard from "../../components/SkillCard";

export default function About() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="text-lg text-gray-700 mb-8">
        This about page shares more information about my background and work.
      </p>

      {/* New card */}
      <SkillCard
        title="Web Development"
        description="I enjoy building full-stack applications using React, Next.js, and Node.js.Even though its a little confusing"
      />
    </main>
  );
}
