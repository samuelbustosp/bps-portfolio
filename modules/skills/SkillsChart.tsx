"use client";

import { Pie, PieChart as RePieChart, Cell } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";
import { SKILLS_PERCENTAGE } from "@/constants/skills";

export default function SkillsPieSimple() {
  const chartConfig = SKILLS_PERCENTAGE.reduce((acc, item, index) => {
    acc[item.name] = {
      label: item.name,
      color: `var(--chart-${index + 1})`,
    };
    return acc;
  }, {} as Record<string, { label: string; color: string }>);

  const data = SKILLS_PERCENTAGE.map((cat) => ({
    name: cat.name,
    value: cat.value,
    fill: `var(--chart-${SKILLS_PERCENTAGE.indexOf(cat) + 1})`,
  }));

  return (
    <div className="">
      <ChartContainer config={chartConfig} className="w-full min-h-80">
        <RePieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="75%"
            cy="50%"
            innerRadius={60}
          >
            {data.map((entry, i) => (
              <Cell key={i} fill={entry.fill} />
            ))}
          </Pie>
          <ChartTooltip content={<ChartTooltipContent />} />
        </RePieChart>
      </ChartContainer>
    </div>
  );
}
