import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { CartesianGrid, Legend, Line, LineChart, XAxis, YAxis } from "recharts";
import Card from "@/components/ui/card";
import { chartConfig2, tickerName } from "@/model/chart_model";
import { AppContext, AppContextProvider } from "@/context/AppContext";

export default function LineChartComp() {
  const { search, chartDataDemo, checked, selectedPeriod } =
    useContext(AppContext);
  const CustomDot = (props: any) => {
    const { cx, cy, payload } = props; // Extract properties from Recharts
    if (payload.Anomaly) {
      return <circle cx={cx} cy={cy} r={6} fill="red" />;
    }
    return null;
  };

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
            <YAxis dataKey={"open"} />
            <XAxis dataKey={"date"} />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  hideLabel={true}
                  additionalKeys={["Close", "Low", "High"]}
                />
              }
            />
            <Line
              dataKey="open"
              type="natural"
              stroke="red"
              strokeWidth={2}
              dot={<CustomDot />}
            />
            {/* <Line
              dataKey="High"
              type="natural"
              stroke="maroon"
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="Low"
              type="natural"
              stroke="maroon"
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="Close"
              type="natural"
              stroke="yellow"
              strokeWidth={2}
              dot={false}
            /> */}
            <Line
              dataKey="Volume"
              type="natural"
              stroke="maroon"
              strokeWidth={2}
              dot={false}
            />
            {selectedPeriod === "1Y" && checked && (
              <Line
                dataKey="si"
                type="natural"
                stroke="purple"
                strokeWidth={2}
                dot={false}
              />
            )}

            <CartesianGrid />
          </LineChart>
        </ChartContainer>
        {search && (
          <p className="font-bold text-center">
            Displaying the LineGraph of{" "}
            {tickerName[search as keyof typeof tickerName]}
          </p>
        )}
      </Card>
    </div>
  );
}
