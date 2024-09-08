import React, { useContext } from "react";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import { chartConfig2 } from "@/model/chart_model";
import { AppContext, AppContextProvider } from "@/context/AppContext";
import Card from "../ui/card";

export default function AreaChartComp() {
  const { search, chartDataDemo } = useContext(AppContext);

  return (
    <div>
      <Card>
        <ChartContainer config={chartConfig2}>
          <AreaChart
            accessibilityLayer
            data={chartDataDemo}
            margin={{
              left: 12,
              right: 12,
            }}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Area
              dataKey="open"
              type="natural"
              fill="red"
              fillOpacity={0.4}
              stroke="red"
            />
          </AreaChart>
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
