

import SkillsChart from "./SkillsChart";
import SkillsLabels from "./SkillsLabels";


export default function Skills() {
  
  return (
    <div className="bg-card/75 rounded-lg border border-border shadow-xl shadow-muted/30 px-8 py-4">
      
      <div className="flex items-center justify-between w-full">
        <div>
          <SkillsLabels/>
        </div>
        
        <SkillsChart/>
      </div>
      
    </div>
  );
}