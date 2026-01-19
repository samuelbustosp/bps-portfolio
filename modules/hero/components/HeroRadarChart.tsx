"use client"

import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts"

import {
  Card,
  CardContent,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"

const chartData = [
  { category: "Detallista", value: 80 },
  { category: "Resolución de prob...", value: 80 },
  { category: "Innovador", value: 100 },
]

const chartConfig = {
  desktop: {
    label: "Perfil",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig

export function HeroRadarChart() {
  return (
    <Card className="w-full max-w-md border-0 shadow-none bg-transparent">
      <CardContent className="w-full p-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto h-60 w-full max-w-sm border-0 bg-transparent p-0 shadow-none"
        >
          <RadarChart data={chartData} outerRadius={100}>
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <PolarGrid />
            <PolarAngleAxis dataKey="category" />
            <Radar
              dataKey="value"
              fill="var(--color-desktop)"
              fillOpacity={0.6}
            />
          </RadarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
