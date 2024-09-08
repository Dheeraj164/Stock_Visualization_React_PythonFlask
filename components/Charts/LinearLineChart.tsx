import React, { useContext } from "react";
import { CartesianGrid, Line, LineChart } from "recharts";
import { ChartContainer } from "@/components/ui/chart";
import { chartConfig2, chartData } from "@/model/chart_model";
import Card from "../ui/card";
import { AppContext, AppContextProvider } from "@/context/AppContext";

export default function LinearLineChart() {
  const { search, chartDataDemo } = useContext(AppContext);

  // const { search } = useContext(AppContext);
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
            <Line
              dataKey="open"
              type="linear"
              stroke="red"
              strokeWidth={2}
              dot={false}
            />
            <CartesianGrid />
          </LineChart>
        </ChartContainer>
        {search && (
          <p className="font-bold  text-center">
            Displaying the Linear LineGraph of {search}
          </p>
        )}
      </Card>
    </div>
  );
}
