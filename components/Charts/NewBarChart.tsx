import React, { useContext } from "react";
import Card from "../ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { chartConfig2 } from "@/model/chart_model";
import { AppContext } from "@/context/AppContext";

export default function NewBarChart() {
  const { search, chartDataDemo } = useContext(AppContext);

  return (
    <div>
      <Card>
        {" "}
        <ChartContainer config={chartConfig2}>
          <BarChart accessibilityLayer data={chartDataDemo}>
            <CartesianGrid vertical={false} />
            {/* <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            /> */}
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            {/* <ChartLegend content={<ChartLegendContent />} /> */}
            <Bar dataKey="open" stackId="a" fill="red" radius={[0, 0, 4, 4]} />
          </BarChart>
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
