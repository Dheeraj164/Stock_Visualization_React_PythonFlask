import AreaChartComp from "@/components/Charts/AreaChart";
import LineChartComp from "@/components/Charts/LineChart";
import NewBarChart from "@/components/Charts/NewBarChart";

export const description = "A stacked area chart";

export const chartConfig2 = {
  open: {
    label: "open",
    color: "hsl(var(--chart-1))",
  },
  High: {
    label: "High",
    color: "hsl(var(--chart-1))",
  },
  Low: {
    label: "Low",
    color: "hsl(var(--chart-1))",
  },
  Close: {
    label: "Close",
    color: "hsl(var(--chart-1))",
  },
  AdjClose: {
    label: "AdjClose",
    color: "hsl(var(--chart-1))",
  },
  Volume: {
    label: "Volume",
    color: "hsl(var(--chart-1))",
  },
  si: {
    label: "si",
    color: "hsl(var(--chart-1))",
  },
};

export const charts = [
  { id: 1, component: <LineChartComp /> },
  { id: 5, component: <NewBarChart /> },
  { id: 6, component: <AreaChartComp /> },
];

export const tickerName = {
  BABA: "Ali Baba",
  BYND: "Beyond Meat",
  META: "META",
  MSFT: "MicroSoft",
  ORCL: "Oracle",
  TGT: "Target",
  WMT: "Walmart",
};
