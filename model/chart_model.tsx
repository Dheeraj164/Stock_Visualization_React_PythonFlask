import AreaChartComp from "@/components/Charts/AreaChart";
import BarChartComp from "@/components/Charts/BarChart";
import LinearLineChart from "@/components/Charts/LinearLineChart";
import LineChartComp from "@/components/Charts/LineChart";
import NewBarChart from "@/components/Charts/NewBarChart";
import StepChart from "@/components/Charts/StepChart";

export const description = "A stacked area chart";

export const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

export const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
};

export const chartConfig2 = {
  open: {
    label: "open",
    color: "hsl(var(--chart-1))", // Define custom colors in CSS
  },
};

export const charts = [
  { id: 1, component: <LineChartComp /> },
  { id: 2, component: <LinearLineChart /> },
  { id: 3, component: <BarChartComp /> },
  { id: 4, component: <StepChart /> },
  { id: 5, component: <NewBarChart /> },
  { id: 6, component: <AreaChartComp /> },
];
