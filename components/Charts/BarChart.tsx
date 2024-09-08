import React, { useContext, useEffect } from "react";
import { Bar, BarChart, CartesianGrid, Cell } from "recharts";
import { AppContext } from "@/context/AppContext";

import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import Card from "../ui/card";

const chartData = [
  { month: "January", visitors: 186 },
  { month: "February", visitors: 205 },
  { month: "March", visitors: -207 },
  { month: "April", visitors: 173 },
  { month: "May", visitors: -209 },
  { month: "June", visitors: 214 },
];
const chartConfig = {
  visitors: {
    label: "Visitors",
  },
} satisfies ChartConfig;

export default function BarChartComp() {
  const { search, data } = useContext(AppContext);

  return (
    <div>
      <Card>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid />

            <Bar dataKey="visitors">
              {chartData.map((item) => (
                <Cell
                  key={item.month}
                  fill={
                    item.visitors < 0
                      ? "hsl(var(--chart-1))"
                      : "hsl(var(--chart-2))"
                  }
                />
              ))}
            </Bar>
          </BarChart>
        </ChartContainer>
        {search && (
          <p className="font-bold  text-center">
            Displaying the Bar Graph of {search}
          </p>
        )}
      </Card>
    </div>
  );
}
