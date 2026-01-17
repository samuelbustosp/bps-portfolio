export const SKILLS = [
  {
    category: "Frontend",
    technologies: ["React", "Next.js", "Tailwind CSS","JavaScript", "TypeScript"]
  },
  {
    category: "Backend",
    technologies: ["Spring Boot"]
  },
  {
    category: "Databases",
    technologies: ["PostgreSQL", "MySQL"]
  },
  {
    category: "Cloud",
    technologies: ["Firebase", "Vercel"]
  },
  {
    category: "Data Analytics",
    technologies: ["Python", "SQL", "Excel"]
  }
];

const totalTechs = SKILLS.reduce((sum, cat) => sum + cat.technologies.length, 0);

export const SKILLS_PERCENTAGE = SKILLS.map(cat => ({
  name: cat.category,
  value: Math.round((cat.technologies.length / totalTechs) * 100)
}));
