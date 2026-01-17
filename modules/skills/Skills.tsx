import { TAGS } from "@/constants/tags";
import { ArrowUpRight, ChartPie, Dot } from "lucide-react"
import Image from "next/image";
import SkillsChart from "./SkillsChart";
import SkillsLegend from "./SkillsLabels";

export default function Skills() {
  
  return (
    <div className="bg-card/75 rounded-lg border border-border shadow-xl shadow-muted/10 px-8 py-4">
      
      <div className="flex items-center justify-between w-full">
        <div>
          <SkillsLegend/>
        </div>
        
        <SkillsChart/>
      </div>
      
    </div>
  );
}