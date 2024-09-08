import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { CartesianGrid, Line, LineChart } from "recharts";
import Card from "@/components/ui/card";
import { chartConfig, chartConfig2, chartData } from "@/model/chart_model";
import { AppContext, AppContextProvider } from "@/context/AppContext";

export default function LineChartComp() {
  const { search, chartDataDemo } = useContext(AppContext);

  return (
    <div>
      <Card>
        <ChartContainer config={chartConfig2}>
          <LineChart
            accessibilityLayer
            data={chartDataDemo}
            margin={{
              left: 12,
              right: 12,
            }}>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey="open"
              type="natural"
              stroke="red"
              strokeWidth={2}
              dot={false}
            />
            <CartesianGrid />
          </LineChart>
        </ChartContainer>
        {search && (
          <p className="font-bold  text-center">
            Displaying the LineGraph of {search}
          </p>
        )}
      </Card>
    </div>
  );
}
