import { COLORS } from "@/constants/colors";
import { SKILLS } from "@/constants/skills";

export default function SkillsLabels() {
  
  return (
    <div className="flex flex-col gap-6  font-sans font-semibold">
      {SKILLS.map((skill, index) => (
        <div key={skill.category} className="flex items-center gap-2">
          {/* El punto de color */}
          <span 
            className={`p-2 rounded ${COLORS[index % COLORS.length]}`} 
          />
          
          {/* Nombre de la categoría */}
          <p className="text-xl text-foreground">
            {skill.category}
          </p>
        </div>
      ))}
    </div>
  );
}