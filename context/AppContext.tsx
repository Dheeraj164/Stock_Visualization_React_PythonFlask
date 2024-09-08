"use client";
import { createContext, ReactNode, useState } from "react";
export type dataType = {
  column: string[];
  data: number[][];
};
interface AppContextType {
  search: string;
  setSearch: (value: string) => void;
  selectedPeriod: string;
  setSelectedPeriod: (value: string) => void;
  selectedChart: number;
  setSelectedChart: (value: number) => void;
  data: dataType;
  setData: (data: dataType) => void;
  getChartData: () => any;
  loading: boolean;
  setLoading: (bool: boolean) => any;
  chartDataDemo: any[];
  setChartData: (data: any) => void;
}

export const AppContext = createContext<AppContextType>({
  search: "AAPL",
  setSearch: (value: string) => {},
  selectedPeriod: "1D",
  setSelectedPeriod: (value: string) => {},
  selectedChart: 1,
  setSelectedChart: () => {},
  data: {
    column: [],
    data: [[]],
  },
  setData: () => {},
  getChartData: () => {},
  loading: false,
  setLoading: () => {},
  chartDataDemo: [],
  setChartData: () => {},
});

// const chartData = data.map((entry, index) => ({
//   day: `Day ${index + 1}`, // or format this as a date
//   open: entry[0],
//   high: entry[1],
//   low: entry[2],
//   close: entry[3],
//   adjClose: entry[4],
//   volume: entry[5],
// }));

export function AppContextProvider({ children }: { children: ReactNode }) {
  const [search, setSearch] = useState("AAPL");
  const [selectedPeriod, setSelectedPeriod] = useState("1D");
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<dataType>({
    column: [],
    data: [[]],
  });
  const [chartDataDemo, setChartData] = useState<any[]>([]);
  const [selectedChart, setSelectedChart] = useState<number>(1);

  function getChartData() {
    const chartData = data.data.map((entry) => {
      return {
        open: entry,
      };
    });
    return chartData;
  }

  // function setDataProps(data: dataType) {
  //   setData(data);
  // }
  return (
    <AppContext.Provider
      value={{
        search,
        setSearch,
        selectedPeriod,
        setSelectedPeriod,
        selectedChart,
        setSelectedChart,
        data,
        setData,
        getChartData,
        loading,
        setLoading,
        chartDataDemo,
        setChartData,
      }}>
      {children}
    </AppContext.Provider>
  );
}
