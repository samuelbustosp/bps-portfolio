import { COLORS } from "@/constants/colors";
import { SKILLS } from "@/constants/skills";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function SkillsLabels() {
  
  return (
    <div className="flex flex-col gap-4 font-sans font-semibold">
      {SKILLS.map((skill, index) => (
        <div key={skill.category} className="">
          {/* El punto de color */}
          <div className="flex items-center gap-2">
            <span 
              className={`p-2 rounded ${COLORS[index % COLORS.length]}`} 
            />
            
            {/* Nombre de la categoría */}
            <p className="text-xl text-foreground">
              {skill.category}
            </p>
          </div>
          <div className="flex items-center gap-1 text-xs mt-1">
            {skill.technologies.map((tec, index) => (
              <div key={index} className="bg-secondary px-2 rounded-lg">
                {tec}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}