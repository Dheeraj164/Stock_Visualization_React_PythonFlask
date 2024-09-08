import React, { useContext } from "react";
import { CartesianGrid, Line, LineChart } from "recharts";
import { ChartContainer } from "@/components/ui/chart";
import Card from "@/components/ui/card";
import { chartConfig2 } from "@/model/chart_model";
import { AppContext, AppContextProvider } from "@/context/AppContext";

export default function StepChart() {
  // const { search } = useContext(AppContext);
  const { search, chartDataDemo } = useContext(AppContext);

  return (
    <div className="">
      <Card>
        <ChartContainer config={chartConfig2}>
          <LineChart
            accessibilityLayer
            data={chartDataDemo}
            margin={{
              left: 12,
              right: 12,
            }}>
            <CartesianGrid />
            <Line
              dataKey="open"
              type="stepAfter"
              dot={false}
              stroke="red"
              strokeWidth={2}
            />
          </LineChart>
        </ChartContainer>
        {search && (
          <p className="font-bold  text-center">
            Displaying the Step Graph of {search}
          </p>
        )}
      </Card>
    </div>
  );
}
