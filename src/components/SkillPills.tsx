const skills = [
  "React / Next.js",
  "Diseño Creativo",
  "Edición de Video",
];

export default function SkillPills() {
  return (
    <div className="flex flex-wrap gap-4">
      {skills.map((skill) => (
        <div
          key={skill}
          className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm font-medium text-white/90 shadow-[0_0_25px_rgba(255,80,0,0.06)] backdrop-blur-md transition hover:-translate-y-1 hover:border-red-500/30"
        >
          {skill}
        </div>
      ))}
    </div>
  );
}