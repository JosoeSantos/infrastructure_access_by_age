"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ReferenceLine,
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

// Sample data for the age pyramid
const data = [
  { ageGroup: "80+", male: -2, female: 3 },
  { ageGroup: "70-79", male: -3, female: 4 },
  { ageGroup: "60-69", male: -5, female: 6 },
  { ageGroup: "50-59", male: -7, female: 8 },
  { ageGroup: "40-49", male: -9, female: 10 },
  { ageGroup: "30-39", male: -11, female: 12 },
  { ageGroup: "20-29", male: -13, female: 14 },
  { ageGroup: "10-19", male: -12, female: 13 },
  { ageGroup: "0-9", male: -10, female: 11 },
];

export function AgePyramid() {
  return (
    <Card className={` max-w-4xl w-[500px]`}>
      <CardHeader>
        <CardTitle>Population Age Pyramid</CardTitle>
        <CardDescription>Distribution of age groups by gender</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            male: {
              label: "Male",
              color: "hsl(var(--chart-1))",
            },
            female: {
              label: "Female",
              color: "hsl(var(--chart-2))",
            },
          }}
        >
          <BarChart
            layout="vertical"
            width={600}
            height={400}
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 30,
              bottom: 5,
            }}
          >
            <XAxis
              type="number"
              tickFormatter={(value) => Math.abs(value).toString()}
            />
            <YAxis dataKey="ageGroup" type="category" />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <ReferenceLine x={0} stroke="#000" />
            <Bar dataKey="male" fill="var(--color-male)" />
            <Bar dataKey="female" fill="var(--color-female)" />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

function CustomTooltip({ active, payload, label }: any) {
  if (active && payload && payload.length) {
    return (
      <ChartTooltip>
        <ChartTooltipContent
          content={
            <div>
              <p className="font-semibold">{label}</p>
              <p>Male: {Math.abs(payload[0].value)}%</p>
              <p>Female: {payload[1].value}%</p>
            </div>
          }
        />
      </ChartTooltip>
    );
  }
  return null;
}
